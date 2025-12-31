document.addEventListener("DOMContentLoaded", function () {
    const kontajner = document.getElementById("zoznam-rezervacii");
    const ulozeneAuta = JSON.parse(localStorage.getItem('mojeAuta')) || [];

    if (ulozeneAuta.length === 0) {
        kontajner.innerHTML = "<h2 style='text-align:center; width:100%;'>Zatiaľ nemáte žiadne rezervácie.</h2>";
        return;
    }

    ulozeneAuta.forEach((auto, index) => {
        // Tu kopírujeme presne tvoju štruktúru z katalógu
        kontajner.innerHTML += `
            <div class="auto-card" style='text-decoration: none; font-size: 25px; border: 1px solid rgba(0, 0, 0, 1);
                           color: black;
                           display: inline-block;
                            margin-top: 15px;
                       z-index: 1px;
                    position: relative;
                    column-gap: 30px;
                    row-gap: 70px; 
                    width: 420px;
                   cursor: pointer;
                    margin-top: 10px;' >

                <img src="${auto.image}" class="nahladak" style='max-width: 400px; height: 250px; object-fit: cover; border-radius: 10px;width: 100%;'>
                <div class="info">
                    <p class="Nazov">${auto.name}</p>
                    <p class="Cena">${auto.prize}</p>
                    <button onclick="zrusitRezervaciu(${index})" class="Rezervovat_but" style="background-color: #ff4d4d; color: white; border-color: #cc0000;">
                        Zrušiť rezerváciu
                    </button>
                </div>
            </div>
        `;
    });
});

window.zrusitRezervaciu = function (index) {
    let list = JSON.parse(localStorage.getItem('mojeAuta'));
    list.splice(index, 1);
    localStorage.setItem('mojeAuta', JSON.stringify(list));
    location.reload();
};