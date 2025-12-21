document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("popup");

    function openPopup() {
        popup.style.display = "flex";
    }

    function closePopup() {
        popup.style.display = "none";
    }

    window.openPopup = openPopup;
    window.closePopup = closePopup;

    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            closePopup();
        }
    });

});

function openPopup(event) {
    event.stopPropagation(); 
    const popupId = event.currentTarget.dataset.popup; 
    const popup = document.getElementById(popupId);
    if (popup) popup.style.display = 'flex';
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) popup.style.display = 'none';
}