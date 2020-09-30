import React from "react"
import { Switch, Route } from "react-router-dom"
import Inscription from "../../pages/Menu/Inscription";
import About from "../../pages/Menu/About.jsx";
import Messagerie from "../../pages/Menu/Messagerie.jsx";
import Home from "../../pages/Menu/Home.jsx";
import MonCompte from "../../pages/Menu/MonCompte";

import Pagesociete from "../../pages/Menu/Pagesociete";
import Annuaire from "../../pages/Menu/annuaire";

const Switcher = () => (
    <div>
        <Route path="/Inscription">
            <Inscription />
        </Route>
        <Route path="/MonCompte">
            <MonCompte />
        </Route>
        <Route path="/annuaire">
            <annuaire />
        </Route>
        <Route path="/Messagerie">
            <Messagerie />
        </Route>
        <Route path="/Pagesociete">
            <Pagesociete />
        </Route>
        <Route path="/About">
            <About />
        </Route>
        <Route  exact path="/home">
            <home />
        </Route>
        
        </div> )

export default Switcher