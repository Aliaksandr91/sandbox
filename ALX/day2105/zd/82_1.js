document.addEventListener("DOMContentLoaded", function () {
  showStatistics();
  document.querySelector("button").onclick = function () {
    submitForm();
  };
});

class User {
  constructor(imie) {
    this.imie = imie;
    this.answersArr = [];
  }
}

let listaUserow = [];
submitForm = () => {
  let userName = document.querySelector("#name").value;
  let userData = new User(userName);
  let answers = [];
  for (let i = 1; i <= 5; i++) {
    let answer = document.querySelector(`input[name="question${i}"]:checked`);
    if (answer == null) {
      console.log("Odpowiedz na wszystkie pytania");
    } else {
      answers.push(answer.value);
    }
  }
  if (answers.length == 5) {
    userData.answersArr = answers;
    listaUserow.push(userData);
    //console.log(listaUserow)
    saveAnswers(listaUserow);
    showStatistics();
    document.querySelector("form").reset();
  }
};

saveAnswers = (answ) => {
  localStorage.setItem("Data", JSON.stringify(answ));
};

showStatistics = () => {
  let Data = JSON.parse(localStorage.getItem("Data"));
  //console.log(Data);
  if (Data !== null) {
    let html = "<ul>";
    for (let x of Data) {
      let count = 1;
      html += "<li>";
      html += `Imię: ${x.imie} Odpowiedzi: `;
      for (y of x.answersArr) {
        html += `${count}.${y}  `;
        count++;
      }
      html += "</li>";
      //console.log(x.answersArr);
    }
    html += "</ul>";
    document.querySelector("#statistics").innerHTML = html;
  }

};
