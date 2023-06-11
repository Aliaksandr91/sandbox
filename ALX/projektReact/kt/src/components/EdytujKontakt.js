import React, { Component } from "react";

class EdytujKontakt extends Component {
  state = {
    index: this.props.match.params.id,
    dane: JSON.parse(localStorage.getItem("KT")),
  };

  zmienDane = () => {
        this.state.dane[this.state.index].imie = document.querySelector('#imie').value;
        this.state.dane[this.state.index].nazwisko  = document.querySelector('#nazwisko').value;
        this.state.dane[this.state.index].email = document.querySelector('#email').value;
        this.state.dane[this.state.index].telefon = document.querySelector('#telefon').value;
        localStorage.setItem('KT', JSON.stringify(this.state.dane));
        window.location.href='/';
    }
  

  render() {
    return (
      <div>
        <div>
          <p>
            Imię <br />
            <input
              type="text"
              id="imie"
              name="imie"
              defaultValue={this.state.dane[this.state.index].imie}
            />
          </p>
          <p>
            Nazwisko <br />
            <input
              type="text"
              id="nazwisko"
              name="nazwisko"
              defaultValue={this.state.dane[this.state.index].nazwisko}
            />
          </p>
          <p>
            Email <br />
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={this.state.dane[this.state.index].email}
            />
          </p>
          <p>
            Telefon <br />
            <input
              type="text"
              id="telefon"
              name="telefon"
              defaultValue={this.state.dane[this.state.index].telefon}
            />
          </p>
          <button onClick={this.zmienDane}>Zapisz nowe dane</button>
          <button>Anuluj</button>
        </div>
      </div>
    );
  }
}
export default EdytujKontakt;
