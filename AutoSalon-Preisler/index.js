function rezervujAuto(nazov, cena, obrazok) {
  const auto = {
    nazov,
    cena,
    obrazok
  };

  let rezervacie = JSON.parse(localStorage.getItem('rezervacie')) || [];
  rezervacie.push(auto);

  localStorage.setItem('rezervacie', JSON.stringify(rezervacie));

  window.location.href = "Mojerezervacie.html";
}
