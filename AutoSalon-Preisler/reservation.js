const params = new URLSearchParams(window.location.search);

document.getElementById("carImage").src = params.get("image");
document.getElementById("carName").textContent = params.get("name");
document.getElementById("carVykon").textContent = params.get("vykon");
document.getElementById("carRychlost").textContent = params.get("rychlost");
document.getElementById("carInfo").textContent = params.get("info");