import React, { Component,useState } from 'react'

import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import countryList from "react-select-country-list";
import "./styles.css";
import MultiSelect from "react-multi-select-component";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button} from 'react-bootstrap';
import Select, { components } from 'react-select';
import 'react-phone-input-2/lib/style.css'
import ReactPhoneInput from "react-phone-input-2";
import Countries  from 'react-select-country';

class Inscription extends Component {
    
  constructor(props) {
    super(props);
    
    this.state = {
     
      
    
      currentStep: 1,
      Prenom: null,
      Nom: null,
      email: null,
      password: null,
      Datedenaissance: null,
      Statut: null,
      Enfants: null,
      Paysresidence: null,
      Paysdorigine: null,
      accessible:  [],
      Fonction: null,
      NomSociete: null,
      Proprietairedelasociété: null,
      NuméroRegistrecommerce: null,
      SiteWeb: null,
      Domaineactivite: null,
      identifiant: null,
      phone : null,
      selectedCountry : null,
      Diaspora: false
    };
  }
  selectPaysdorigine = (val) => {
    val=val.label
    this.setState({ Paysdorigine: val });
  }
  selectPaysresidence = (val) => {
    val=val.label
    this.setState({ Paysresidence: val });
  }
  AcessiblehandleChange(event) {
    
    const selected=[];
    let selectedOption=(event.target.selectedOptions);
 
    for (let i = 0; i < selectedOption.length; i++){
        selected.push(selectedOption.item(i).value)
    }
     
    this.setState({ accessible: selected});
  }
  
 
  handleOnChange = value => {
    console.log(value);
    this.setState({ phone: value }, () => {
      console.log(this.state.phone);
      
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
   
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { selectedCountry,phone,email,password,Prenom,Nom,Datedenaissance,Statut,Paysresidence,Paysdorigine,acessible,Fonction,NomSociete,Proprietairedelasociété,NuméroRegistrecommerce,SiteWeb,Domaineactivite,identifiant,Diaspora} = this.state;
    alert(`Your registration detail: \n 
    selectedCountry: ${selectedCountry}\n
    NuméroRegistrecommerce:  ${NuméroRegistrecommerce}\n
    accessible:   ${acessible}\n
           Nom: ${Nom}\n
           Fonction:  ${Fonction}\n
           Diaspora :  ${Diaspora}`);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button style={{ float: 'left'}}
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 4) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }
  
  render() {
    return (
      <React.Fragment>
     
     
      <div className="wrapper">
      <div className="form-wrapper">
      <div  className="row mb-4">
              <div  className="col-lg-8 mx-auto text-center">
                  <h1  className="display-4">Inscription</h1>
              </div>
          </div>
          <p>Step {this.state.currentStep} </p>
      <form onSubmit={this.handleSubmit}>
        {/* 
      render the form steps and pass required props in
    */}
        <Step1
        currentStep={this.state.currentStep}
        handleChange={this.handleChange}
        Diaspora={this.state.Diaspora}
        
        />
        
        <Step2
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          handleOnChange={this.handleOnChange}
          selectPaysresidence={this.selectPaysresidence}
          selectPaysdorigine={this.selectPaysdorigine}
         
          Prenom={this.state.Prenom}
          Nom={this.state.Nom}
         
          Diaspora={this.state.Diaspora}
          Datedenaissance={this.state.Datedenaissance}
          Statut={this.state.Statut}
          Paysresidence={this.state.Paysresidence}
          Paysdorigine={this.state.Paysdorigine}
          phone={this.state.phone}
         
        />
        
        <Step3
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          Diaspora={this.state.Diaspora}
          Fonction={this.state.Fonction}
          NomSociete={this.state.NomSociete}
          Proprietairedelasociété={this.state.Proprietairedelasociété}
          NuméroRegistrecommerce={this.state.NuméroRegistrecommerce}
          SiteWeb={this.state.SiteWeb}
          Domaineactivite={this.state.Domaineactivite}
        />
        <Step4
          Diaspora={this.state.Diaspora}
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          AcessiblehandleChange={this.AcessiblehandleChange}
          Email={this.state.email}
          Password={this.state.password}
          accessible={this.state.Acessible}
          identifiant={this.state.identifiant}
          categories={this.state.categories}

        />
        {this.previousButton()}
        {this.nextButton()}
      </form>
      </div>
    </div>
    </React.Fragment>
     
      
    );
  }
  
}
function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  
 
  return (
   
    <div className="form-group" style={ { height: 300 } }>
              <ButtonGroup aria-label="Basic example"  className="mb-2" style={{ display: "flex",height: "100px",width:"100%", justifyContent: "center", alignItems: "center" }}>
          <Button variant="primary" name="Diaspora" value="true" onClick={props.handleChange}  >Diaspora Africaine</Button>{' '}
          
          <Button variant="outline-primary" >Personne physique ou Société </Button>
        </ButtonGroup>
    </div>
  );
}

function Step2(props) {
 
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    
    
    <div className="form-group">
      

      <div className="Nom">
        <label htmlFor="Nom">Nom</label>
        <input
          className="form-control"
          placeholder="Nom"
          type="text"
          name="Nom"
          noValidate
          value={props.Nom}
          onChange={props.handleChange}
        />
      </div>
      <div className="Prenom">
        <label htmlFor="Prenom">Prenom</label>
        <input
          className="form-control"
          placeholder="Prenom"
          type="text"
          name="Prenom"
          noValidate
          onChange={props.handleChange}
          value={props.Prenom}
        />
      </div>
      <div className="phone" class="form-group" >
      <label htmlFor="phone">Telephone</label>
      <ReactPhoneInput
          inputExtraProps={{
            name: "phone",
            required: true,
            autoFocus: true
          }}
          defaultCountry={"sg"}
          value={props.phone}
          onChange={props.handleOnChange} 
          id="phone"
          
          
        />
        
        
       </div>
      

      {props.Diaspora &&<div className="Statut" class="form-group">
        <label for="Statut">Statut</label>
        <select
          
          noValidate
          id="Statut"
          class="form-control"
          value={props.Statut}
          onChange={props.handleChange}
          onInputChange={props.handleInputChange}
          >
           <option value="" selected disabled>Statut</option>
          <option value="Marié">Marié</option>
          <option value="célibataire">célibataire</option>
          <option value="encouple">
            en couple
          </option>
          <option value=" divorcéouveuf "> divorcé ou veuf </option>
          
        </select>
      </div>}
      <div className="Paysresidence" class="form-group">
        <label for="Paysresidence">Paysresidence</label>
        
        <Select
            name="Paysresidence"
            options={countryList().getData()}
            
            onChange={(val) => props.selectPaysresidence(val)}
            
          />
       
      </div>
      
      <div className="Paysdorigine" class="form-group">
        <label htmlFor="Paysdorigine">
          Paysdorigine </label>
          <Select
            name="Paysdorigine"
            options={countryList().getData()}
            
            onChange={(val) => props.selectPaysdorigine(val)}
            
          />
        
      </div>
      {props.Diaspora &&<div className="Datedenaissance">
        <label htmlFor="Datedenaissance">Date de naissance</label>
        <input
          class="form-control"
          placeholder="Date de naissance"
          type="date"
          name="Datedenaissance"
          noValidate
          value={props.Datedenaissance}
          onChange={props.handleChange}
        />
      </div>}
      
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div className="form-group">
       {props.Diaspora &&<div className="Proprietairedelasociété">
        <label htmlFor="Proprietairedelasociété">
          Proprietaire de la société
        </label>
        <input
          onChange={props.handleChange}
          
          type="radio"
          value="oui"
          name="oui"
        />{" "}
        Oui
        <input type="radio"   onChange={props.handleChange}
         value="Non" name="Non" /> Non
      </div>}
      <div className="Fonction">
        <label htmlFor="Fonction">Fonction</label>
        <input
          class="form-control"
          placeholder="Fonction"
          type="text"
          name="Fonction"
          noValidate
          onChange={props.handleChange}
          value={props.Fonction}
        />
      </div>
      <div className="NomSociete">
        <label htmlFor="NomSociete">NomSociete</label>
        <input
          class="form-control"
          placeholder="NomSociete"
          type="text"
          name="NomSociete"
          noValidate
          onChange={props.handleChange}
          value={props.NomSociete}
        />
      </div>
      <div className="NuméroRegistrecommerce">
        <label htmlFor="NuméroRegistrecommerce">
          Numéro du Registre commerce
        </label>
        <input
          class="form-control"
          placeholder="Numéro Registre commerce"
          type="text"
          name="NuméroRegistrecommerce"
          noValidate
          onChange={props.handleChange}
          value={props.NuméroRegistrecommerce}
        />
      </div>
      <div className="Domaineactivite">
        <label htmlFor="Domaineactivite">Domaineactivite</label>
        <input
          class="form-control"
          placeholder="Domaineactivite"
          type="text"
          name="Domaine
				activite"
          noValidate
          onChange={props.handleChange}
          value={props.Domaineactivite}
        />
        
      </div>

      <div className="SiteWeb">
        <label htmlFor="SiteWeb">SiteWeb</label>
        <input
          class="form-control"
          placeholder="SiteWeb"
          type="url"
          name="SiteWeb"
          noValidate
          onChange={props.handleChange}
          value={props.SiteWeb}
        />
        
      </div>
    </div>
  );
}

function Step4(props) {
  if (props.currentStep !== 4) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="form-group">
      <div className="email">
              <label htmlFor="email">Email</label>
              <input
                class="form-control"
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={props.handleChange}
                value={props.email}
              />
              
            </div>
            <div className="identifiant" className="form-group">
              <label htmlFor="identifiant">identifiant</label>
              <input
               class="form-control"
                value={props.identifiant}
                placeholder="identifiant"
                type="text"
                name="identifiant"
                noValidate
                onChange={props.handleChange}
              />
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                class="form-control"
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={props.handleChange}
                value={props.identifiant}
              />
              
            </div>
            <div className="Acessible">
              <label htmlFor="Acessible">
                Acessible </label>
                <MultiSelect
                  options={[
                    { label: "Whatsapp ", value: "Whatsapp" },
                    { label: "Botim ", value: "Botim" },
                    { label: "Telegram ", value: "Telegram" }
                  ]}
                  value={props.Acessible}
                  onChange={props.AcessiblehandleChange}
                  
                /> </div>
            
      <button size ='lg' className="mt-5 " className="btn btn-success " style={{  float: 'right'}}>Sign up</button> 
      </div>
    </React.Fragment>
  );
}

class Box extends Component{render(){return(<div>this is a div</div>)}}
  export default Inscription;