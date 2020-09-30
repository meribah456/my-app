import React  ,{ Component}from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {  Switch, Route } from "react-router-dom";
import { BrandButtonDefault } from "../../library/Button";
import Inscription from "../../../pages/Menu/Inscription";
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
 //component = {Inscription}
 //<Route path="/Inscription" component = {Inscription} />
 const SignUpButton = () => (
  <div>
 
 
 
 <Router>
  
  <Link to="/Inscription" className="mr-5">
    <BrandButtonDefault type="button" value="Inscription" />
  </Link>
  
  </Router>
  
 
 
 
 </div>
);


export default SignUpButton;


