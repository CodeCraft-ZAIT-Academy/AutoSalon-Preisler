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