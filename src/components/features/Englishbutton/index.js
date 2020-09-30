import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { HOME } from "../../../constants/routes";
const Englishbutton = () => (
  <BrowserRouter>
    <Link to={HOME.link} className="font-bold text-white text-2xl ">
      <span
        className="flex flex-col bg-brand w-10 h-10 rounded-full justify-center items-center text-center cursor-pointer
        "
      >
        En
      </span>
    </Link>
  </BrowserRouter>
);

export default Englishbutton;
