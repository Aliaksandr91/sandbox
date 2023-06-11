import React, { Component } from "react";


class ListaKontaktow extends Component {


    state = {
        dane: JSON.parse(localStorage.getItem("KT"))
    }

  render() {

    return(
      <div>

        <table border="1">
            <tr>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Email</th>
                <th>Telefon</th>
            </tr>
            {this.state.dane != null && this.state.dane.length > 0 ? this.state.dane.map((value, index) => 
            <tr>
                <td>{value.imie}</td>
                <td>{value.nazwisko}</td>
                <td>{value.email}</td>
                <td>{value.telefon}</td>

                <td><a href={`/usun/${index}`}>usun</a></td>
                <td><a href={`/edytuj/${index}`}>edytuj</a></td>
            </tr>
            ) : 
            <tr>
                <td colspan="4">Brak danych</td>
            </tr>
            }
        </table>

      </div>
    ) 

  }
}
export default ListaKontaktow;
