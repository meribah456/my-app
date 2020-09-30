import React, { Fragment } from "react";
import SignUpButton from "../../components/features/Signup";
import SignInButton from "../../components/features/Signin";

import SearchField from "../../components/features/Search";
//import Button from  'reactstrap';
import { useHistory, Link  } from 'react-router-dom';
import { Router } from "@reach/router";
import About from "../../pages/Menu/About.jsx";
import Messagerie from "../../pages/Menu/Messagerie.jsx";
import Home from "../../pages/Menu/Home.jsx";
import MonCompte from "../../pages/Menu/MonCompte";
import Inscription from "../../pages/Menu/Inscription";
import Pagesociete from "../../pages/Menu/Pagesociete";
import Annuaire from "../../pages/Menu/annuaire";
import Annonce from "../../pages/Menu/Annonce";

import Card from 'react-bootstrap/Card';

import logo from './logo.png';
import "../../assets/scss/base.scss";
import "./App.css";
import ResponsiveNavigation from "../../components/ResponsiveNavigation";


const pStyle = {
  position: 'absolute',
  
  right: '16px'}


const navLinks = [
  {
    text: "Home",
    path: "/Home",
    icon: "ion-ios-home"
  },
  {
    text: "Mon Compte",
    path: "/MonCompte",
    icon: "ion-ios-person"
  },

  {
    text: "Inscription",
    path: "/Inscription",
    icon: "ion-ios-list"
  },
  {
    text: "Deposer une annonce",
    path: "/Annonce",
    icon: "ion-ios-checkmark"
  },
  {
    text: "Annuaire",
    path: "/annuaire",
    icon: "ion-ios-book"
  },
  {
    text: "Page société",
    path: "/Pagesociété",
    icon: "ion-ios-business"
  },
  {
    text: "Messagerie",
    path: "/Messagerie",
    icon: "ion-ios-chatboxes"
  },
  {
    text: "About",
    path: "/about",
    icon: "ion-ios-information"
  }
];

const Header = () => (
  <Fragment>
    <header
      className="xs:px-2 sm:py-2
                           sm:px-6 sm:py-3
                           md:px-8 sm:py-4
                           flex justify-end bg-brand-dark py-4 px-10 items-center "
    >
      <SearchField />
      <div className="image-logo">
     <div  className="flex xs:hidden items-center ml-auto">

        <SignUpButton />
        <SignInButton />
        </div>
      </div>
      
    </header>
    <header>
    <Card className="bg-dark text-white" style={{ height: "70px" }} >
  <Card.Img src={logo} alt="Card image" />
  <Card.ImgOverlay>
   
    <Card.Text style={{ ...pStyle, bottom: "30px" }}>
        Grossistes, producteurs, fabricants, fournisseurs ...
    </Card.Text>
    <Card.Text style={{ ...pStyle, bottom: "8px" }}>
    Vous cherchez, nous trouvons</Card.Text>
  </Card.ImgOverlay>
</Card>


    </header>
    <header>
    <div className="App">
      <ResponsiveNavigation
        navLinks={navLinks}
        background="#fff"
        hoverBackground="#ddd"
        linkColor="#777"
      />
      <Router>
        <MonCompte path="/MonCompte" />
        <Home path="/home" />
        <Inscription path="/Inscription" />
        <Messagerie path="/Messagerie" />
        <Pagesociete path="/Pagesociete" />
        <Annuaire path="/annuaire" />
        <Annonce path="/Annonce" />

        <About path="/about" />
      </Router>
    </div>
    </header>
    
  </Fragment>
);

export default Header;
