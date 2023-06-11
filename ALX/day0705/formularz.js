document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("button#test").onclick = function(){
          
        let imie = document.querySelector("#imie").value;
      let nazwisko = document.querySelector("input[name=nazwisko]").value;
      console.log(imie, nazwisko);

        let tabInput = document.querySelectorAll("input");
        for(let input of tabInput){
            console.log(input.value);
        }

        let miasto = document.querySelector("select[name=miasto]").value;
        let opis = document.querySelector("textarea[name=opis]").value;
        console.log(opis);

        let kolory = document.querySelectorAll("input[name=kolor]");
        for(let x of kolory){
            if(x.checked == true){
                console.log(x.value);
                break;
            }
        }

        let auta = document.querySelectorAll("#auto input");
        let autaChecked = [];
        for(let x of auta){
            if(x.checked == true){
                autaChecked.push(x.value);
            }
        }

        if(autaChecked.length == 0){
            alert("Proszę zaznaczyć !");
        }
        console.log(autaChecked);


        // wtrzykniecie danych z poziomu JS do HTMLa
        // document.querySelector("h2").innerHTML = imie;
    }

})






