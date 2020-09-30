import React from "react";
import { Link } from "react-router-dom";
import { BrandButtonDefault } from "../../library/Button";

const SignInButton = () => (
  <Link to="/signin" className="mr-5">
    <BrandButtonDefault type="button" value="Login" />
  </Link>

  
);

export default SignInButton;
