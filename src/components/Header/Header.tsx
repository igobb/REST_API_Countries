import React from "react";
import * as C from "./HeaderStyles";
import {BsMoonStarsFill} from 'react-icons/bs'

const Header = () => {
  return (
    <C.Header>
      <div className="header__container">
        <h1>Where in the World?</h1>
        <div className="button__change-mode">
            <BsMoonStarsFill/><p>Dark Mode</p> 
        </div>
      </div>
    </C.Header>
  );
};

export default Header;
