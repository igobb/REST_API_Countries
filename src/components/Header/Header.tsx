import React from "react";
import { ThemeActions, useForm } from "../../contexts/ThemeContext";
import {BsMoonStarsFill, BsLightbulbFill} from 'react-icons/bs'

import * as C from "./HeaderStyles";

const Header = () => {
  const {state, dispatch} = useForm()

  const handleChangeTheme = () => {
    dispatch({
      type: ThemeActions.setTheme,
      payload: state.theme === 'light' ? 'dark' : 'light'
    })
  }

  return (
    <C.Header theme={state.theme}>
      <div className="header__container">
        <h1>Where in the World?</h1>
        <div className="button__change-mode" onClick={handleChangeTheme}>
          {
            state.theme === `light` ? <><BsMoonStarsFill/><p>Dark Mode</p></> : <><BsLightbulbFill/><p>Light Mode</p></>
          }
             
        </div>
      </div>
    </C.Header>
  );
};

export default Header;
