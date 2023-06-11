document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#dodaj").onclick = function () {
    dodaj("ALX", "Kurs JS", 1);
  };

  document.querySelector("#pokaz").onclick = function () {
    pokaz();
  };

  document.querySelector("#usun").onclick = function () {
    usun();
  };
});

dodaj = (nazwa, wartosc, dni) => {
  let d = new Date();
  d.setTime(d.getTime() + (dni * 24 * 60 * 60 * 1000));
  document.cookie = `${nazwa}=${wartosc};expires=${d.toUTCString()}}`
  //console.log(d.toUTCString())
};

pokaz = () => {};

usun = () => {
    let d = new Date();
    d.setTime(d.getTime() + (dni * 24 * 60 * 60 * 1000));
    document.cookie = `${nazwa}=${wartosc};expires=${d.toUTCString()}}`
};
