import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch,  Route } from 'react-router-dom';
import Header from "../layouts/Header";
import HeaderMobile from "../layouts/Header/mobile";
import Footer from "../layouts/Footer/footer.js";
import Payment from "../components/features/Payment/payment.js";
import  Switcher from "./"
import Inscription from "../pages/Menu/Inscription";
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <HeaderMobile forMobile={true} />
        
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
