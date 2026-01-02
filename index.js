document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");

    // 1. Funkcia na otvorenie pop-upu s dátami z karty
    window.openPopup = function(card) {
        // Načítanie dát z "data-" atribútov
        const image = card.dataset.image;
        const name = card.dataset.name;
        const prize = card.dataset.prize;
        const vykon = card.dataset.vykon;
        const rychlost = card.dataset.rychlost;
        const info = card.dataset.info;

        // Dosadenie dát do elementov v pop-upe
        document.querySelector('.popup-image').src = image;
        document.querySelector('.popup-text').textContent = name;
        document.querySelector('.popup-prize').textContent = prize;
        document.querySelector('.popup-vykon').textContent = "Výkon: " + vykon;
        document.querySelector('.popup-rychlost').textContent = rychlost;
        document.querySelector('.infoska').textContent = info;

        // Zobrazenie pop-upu
        popup.style.display = "flex";
    };

    // 2. Funkcia na zatvorenie
    window.closePopup = function() {
        popup.style.display = "none";
    };

    // 3. Zatvorenie kliknutím mimo obsahu (na pozadie)
    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            closePopup();
        }
    });
});

window.filterCars = function(selectedBrand) {
    // 1. Nájdeme všetky karty áut (uisti sa, že tvoje divy majú class="card")
    const cards = document.querySelectorAll('.auto-card');

    cards.forEach(card => {
        
        if (selectedBrand === 'all') {
            card.style.display = "inline-block";
        } 
        // 3. Inak ukážeme len to, čo sa zhoduje, a ostatné skryjeme
        else if (card.dataset.brand === selectedBrand) {
            card.style.display = "inline-block";
        } 
        else {
            card.style.display = "none";
        }
    });
};


