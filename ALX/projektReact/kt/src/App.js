import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ListaKontaktow from "./components/ListaKonraktow";
import DodajKontakt from "./components/DodajKontakt";
import EdytujKontakt from "./components/EdytujKontakt";
import UsunKontakt from "./components/UsunKontakt";

class App extends Component {
  render() {

    return(
      <div>
        <h1>Książla telefoniczna</h1>

        <ul>
          <li>
            <a href="/">Lista kontaktów</a>
          </li>
          <li>
            <a href="/dodaj">Dodaj nowy kontakt</a>
          </li>
        </ul>

<BrowserRouter>
<Switch>
  <Route exact path="/" component={ListaKontaktow}/>
  <Route path="/dodaj" component={DodajKontakt}/>
  <Route path="/edytuj/:id" component={EdytujKontakt}/>
  <Route path="/usun/:id" component={UsunKontakt}/>
</Switch>
</BrowserRouter>


      </div>
    ) 

  }
}
export default App;
