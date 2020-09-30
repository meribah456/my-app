import React, { Component } from 'react'

class Annonce extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            AdThemes: '',
            AdUnderThemes: null
        }
    }
    handleChange(e) {
        this.setState({AdThemes: e.target.value});
      }
    

      handleSubmit = (event) => {
        event.preventDefault();
        const { AdThemes} = this.state;
        alert(`Your registration detail: \n 
        
        AdThemes: ${AdThemes}\n
        `);
      };
    
       
     
    render () {
        return (
            <div  className="container py-5">
   
            <div  className="row mb-4">
               <div  className="col-lg-8 mx-auto text-center">
                   <h1  className="display-4">add  your ad</h1>
               </div>
           </div>
           
           <div  className="row">
               <div  className="col-lg-6 mx-auto">
                   <div  className="card ">
                       <div  className="card-header">
                          
                          
                           
                           
                         
                           <div  className="tab-content">
       
                               <div id="credit-card"  className="tab-pane fade show active pt-3">
                                 
       
                               <form onSubmit={this.handleSubmit}>
                                       <div  className="form-group">
                                           
                                            <label for="adtitle">  <h6>Ad title</h6> </label>
                                             <input type="text" name="adtitle" placeholder="Give title to your ad"  className="form-control " />
                                       </div>
                                       <div  className="form-group "> <label for="ad language">
                                       <h6>ad language</h6>
                                   </label> <select  className="form-control" id="ccmonth">
                                       <option value="" selected disabled>--Please select your ad language--</option>
                                       <option>French</option>
                                       <option>English</option>
                                       
                                   </select> </div>
                                   <div  className="form-group "> <label for="AdThemes">
                                       <h6>Theme</h6>
                                   </label> <select  id="AdThemes"  onChange={this.handleChange} className="form-control" id="AdThemes">
                                       <option value="" selected disabled>--Please select your ad theme--</option>
                                       <option value="Insurance">Insurance</option>
                                       <option value="Financing">Financing</option>
                                       <option value="Petrol_Gas_Mines"> Petrol / Gas / Mines</option>
                                       <option value="Telecommunication">Telecommunication</option>
                                       <option value="Services">Services</option>
                                       <option value="Transport_Logistics_Storage">Transport, Logistics and Storage</option>
                                       <option value="Food_Beverage">Food and Beverage</option>
                                       <option value="Real_Estate">Real Estate</option>
                                       <option value="Training">Training</option>
                                       <option value="Projects_Partnerhip">Projects Partnerhip</option>
                                       <option value="RenewableEnergy">Renewable Energy</option>
                                       <option value="TextileIndustry">Textile Industry</option>
                                       
                                   </select> </div>
                                   {this.state.AdThemes=="Financing" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Under Themes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Please select your ad Under Theme--</option>
                                       <option value="Banks">Banks </option>
                                       <option value="Investment Funds">Investment Funds</option>
                                       <option value="Business Angels">Business Angels</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}
                                   {this.state.AdThemes=="Petrol_Gas_Mines" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Under Themes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Please select your ad Under Theme--</option>
                                       <option value="Exploration">Exploration /  /  / Others </option>
                                       <option value="Distribution">Distribution</option>
                                       <option value="Equipment">Equipment</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}
                                   {this.state.AdThemes=="Telecommunication" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Under Themes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Please select your ad Under Theme--</option>
                                       <option value="Manufacturing">Manufacturing</option>
                                       <option value=" Installation"> Installation</option>
                                       <option value="Turnkey Projects">Turnkey Projects</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}
                                   {this.state.AdThemes=="Services" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Under Themes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Please select your ad Under Theme--</option>
                                       <option value="Fiduciary">Fiduciary</option>
                                       <option value="Law Firm"> Law Firm</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}
                                   {this.state.AdThemes=="Transport_Logistics_Storage" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Under Themes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Please select your ad Under Theme--</option>
                                       <option value="Manufacturing">Manufacturing</option>
                                       <option value="Transport">Transport</option>
                                       <option value="Logistics">Logistics</option>
                                       <option value="Storage">Storage</option>
                                       <option value="Others">Others</option>
                                   </select> </div>}
                                   {this.state.AdThemes=="Food_Beverage" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Under Themes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Please select your ad Under Theme--</option>
                                       <option value="Producers">Producers</option>
                                       <option value="Cooperatives">Cooperatives</option>
                                       <option value="Trading Companies">Trading Companies</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}
                                   {this.state.AdThemes=="Real_Estate" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Under Themes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Please select your ad Under Theme--</option>
                                       <option value="Architect">Architect </option>
                                       <option value="Building Materials">Building Materials</option>
                                       <option value="Construction">Construction</option>
                                       <option value="Services ">Services (Guarding / Gardening…) </option>
                                       <option value="Property Management">Property Management</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}
                                   {this.state.AdThemes=="Training" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Under Themes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Please select your ad Under Theme--</option>
                                      
                                       <option value="Specialized Masters">Specialized Masters</option>
                                       <option value="Languages">Languages</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}
                                   
                                   {this.state.AdThemes=="RenewableEnergy" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Under Themes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Please select your ad Under Theme--</option>
                                       <option value="Manufacturing">Manufacturing</option>
                                       <option value="Installation">Installation</option>
                                       <option value="Turnkey Projects">Turnkey Projects</option>
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}
                                   {this.state.AdThemes=="TextileIndustry" &&<div  className="form-group "> <label for="UnderThemes">
                                       <h6>Under Themes</h6>
                                   </label> <select  className="form-control" id="UnderThemes">
                                       <option value="" selected disabled>--Please select your ad Under Theme--</option>
                                       <option value="Manufacturing">Manufacturing</option>
                                       <option value="Distribution">Distribution</option>
        
                                       <option value="Others">Others</option>
                                       
                                   </select> </div>}
                                  
                                  
                                   <div><label>Ad description </label>
                                    <input type="textarea" 
                                    name="description"
                                    onChange={this.handleChange}
                                    style={{height: '100px', width: '550px'}}
                                    /></div>
                                   
                               
                               
       
                                       
       
                                       <div  className="card-footer"> 
                                       <button  type="submit"  className="subscribe btn btn-primary btn-block shadow-sm" > save</button> </div>
                               </form>   
                               </div>
                           </div>
                           
       
                           
                           
       
                           
       
                       </div>
                   </div>
               </div>
           </div>
          
        </div>
        )
    }
}

export default Annonce