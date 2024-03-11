var modal = document.getElementById('menuModal');
var lightboxModal = document.getElementById('lightboxModal');
var lightboxContent = document.getElementById('lightboxContent');


document.querySelectorAll(".menu-button").forEach(function (button) {
    button.addEventListener("click", function () {
        var targetId = button.getAttribute("data-target");
        showMenu(targetId);
    });
});


function showMenu(targetId) {
    var menuContent = document.getElementById(targetId);

    if (menuContent) {
        
        document.querySelectorAll(".modal-content > div").forEach(function (content) {
            content.style.display = "none";
        });

        
        menuContent.style.display = "block";

        
        modal.style.display = "block";
    }
}


function closeMenu(targetId) {
    var menuContent = document.getElementById(targetId);
    if (menuContent) {
        menuContent.style.display = "none";
        modal.style.display = "none";
    }
}


function openLightbox(src, alt) {
    lightboxContent.innerHTML = `<div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background-color: rgba(0, 0, 0, 0.7); z-index: 1001;"><img src="${src}" alt="${alt}" style="width: auto; height: 80vh;"></div>`;
    lightboxModal.style.display = 'block';
}


function closeLightbox() {
    lightboxModal.style.display = 'none';
    lightboxContent.innerHTML = '';
}


document.body.addEventListener("click", function (event) {
    var button = event.target.closest(".menu-button");
    if (button) {
        var targetId = button.getAttribute("data-target");
        showMenu(targetId);
    }
});

window.addEventListener("click", function (event) {
    if (event.target == modal || event.target.classList.contains('close')) {
        closeMenu();
    }
    if (event.target == lightboxModal) {
        closeLightbox();
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.menu-button');

    buttons.forEach(function (button) {
        button.addEventListener('mouseover', function () {
            button.classList.add('active');
        });

        button.addEventListener('mouseout', function () {
            button.classList.remove('active');
        });
    });
});