document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("input[type='button']").onclick = function () {
    let inpImie = document.querySelector("input[name=imie]").value;

    if (inpImie == "") {
      document.querySelector("#imie").innerHTML = "Wpisz Imię";
    } else {
      document.querySelector("#imie").innerHTML = inpImie;
    }

    let inpNazwisko = document.querySelector("input[name=nazwisko]").value;
    if (inpNazwisko == "") {
      document.querySelector("#nazwisko").innerHTML = "Wpisz Nazwisko";
    } else {
      document.querySelector("#nazwisko").innerHTML = inpNazwisko;
    }

    let inpMiasto = document.querySelector("select[name=miasto]").value;

	if (inpMiasto == "") {
		document.querySelector("#miasto").innerHTML = "Wpisz Miasto";
	  } else {
		document.querySelector("#miasto").innerHTML = inpMiasto;
	  }





    let inpTechnologie = document.querySelectorAll("input[type=checkbox]");
    let technologieChecked = [];

    for (let x of inpTechnologie) {
      if (x.checked == true) {
        technologieChecked.push(x.value);
      }
    }
	if (technologieChecked.length == 0){
		document.querySelector("#technologie").innerHTML = 'Wybierz technologie';
	} else {
		document.querySelector("#technologie").innerHTML = technologieChecked;
	}

    let inpStanowisko = document.querySelectorAll("input[type=radio");
    for (let x of inpStanowisko) {
      if (x.checked == true) {
        document.querySelector("#stanowisko").innerHTML = x.value;
        break;
      } else {
		document.querySelector("#stanowisko").innerHTML = 'Wybierz stanowisko';
	  }
    }

    let inpUwagi = document.querySelector("textarea").value;

    
    document.querySelector("#uwagi").innerHTML = inpUwagi;
  };
});
