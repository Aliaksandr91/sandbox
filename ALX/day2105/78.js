document.addEventListener("DOMContentLoaded", function () {
  wyswetlKontakty();
  document.querySelector("button").onclick = function () {
    dodajKontakt();
  };
});

class Kontakt {
  constructor(imie, nazwisko, telefon) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.telefon = telefon;
  }
}

dodajKontakt = () => {
  let imie = document.querySelector("#imie").value;
  let nazwisko = document.querySelector("#nazwisko").value;
  let telefon = document.querySelector("#telefon").value;

  let kontakt = new Kontakt(imie, nazwisko, telefon);

  let daneStorage = localStorage.getItem("KT");
  let tab = JSON.parse(daneStorage);

  if (tab == null) {
    tab = [];
  }
  tab.push(kontakt);
  let jsonKOntakt = JSON.stringify(tab);
  localStorage.setItem("KT", jsonKOntakt);
  wyswetlKontakty();
};
wyswetlKontakty = () => {
  let daneStorage = localStorage.getItem("KT");
  let tab = JSON.parse(daneStorage);
  let html = "<ul>";
  for (let x in tab) {
    html += "<li>";
    html += `Imię: ${tab[x].imie} Nazwisko: ${tab[x].nazwisko} Telefon: ${tab[x].telefon}`;
    html += ` <a onClick='usunKontakt(${x})'><b>usuń</b></a>`;
    html += "</li>";
  }
  html += "</ul>";
  document.querySelector("#listaKontaktow").innerHTML = html;
};
usunKontakt = (index) => {
    let daneStorage = localStorage.getItem("KT");
    let tab = JSON.parse(daneStorage);
    let jsonKOntakt = JSON.stringify(tab.splice(index, 1));
    localStorage.setItem("KT", jsonKOntakt);
    wyswetlKontakty();
}
