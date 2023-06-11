import React, { Component } from "react";

class UsunKontakt extends Component {
    state = {
      index: this.props.match.params.id,
      dane: JSON.parse(localStorage.getItem("KT")),
    };

    usun = () => {
        this.state.dane.splice(this.state.index, 1)
        localStorage.setItem('KT', JSON.stringify(this.state.dane));
        window.location.href='/';
    }
    anuluj = () => {
        window.location.href='/';
    }



    render() {
        return(
            <div>
                Czy napewno chcesz usunac ponizszy kontakt?<br/>
                imie:{this.state.dane[this.state.index].imie}<br/>
                nazwisko: {this.state.dane[this.state.index].nazwisko}<br/>
                email: {this.state.dane[this.state.index].email}<br/>
                telefon: {this.state.dane[this.state.index].telefon}<br/>
                <button onClick={this.usun}>TAK</button>
                <button onClick={this.anuluj}>NIE</button>
            </div>
        )
    }
}
export default UsunKontakt;