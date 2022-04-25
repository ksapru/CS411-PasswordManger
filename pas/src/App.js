import './App.css'

import { BiCheckDouble } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { CgPassword } from "react-icons/cg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import React, { useState, showHide } from "react";


export default function App() {
  const [show, setShow] = useState(false);

  
  const valid = (item, v_icon, inv_icon) => {
    let text = document.querySelector(`#${item}`);
    text.style.opacity = "1";

    let valid_icon = document.querySelector(`#${item} .${v_icon}`)
    valid_icon.style.opacity = "1";

    let invalid_icon = document.querySelector(`#${item}.${inv_icon}`)
    invalid_icon.style.opacity = "0";

  };

  const invalid = (item, v_icon, inv_icon) => {
    let text = document.querySelector(`#${item}`);
    text.style.opacity = ".5";

    let valid_icon = document.querySelector(`#${item} .${v_icon}`)
    valid_icon.style.opacity = "0";

    let invalid_icon = document.querySelector(`#${item}.${inv_icon}`)
    invalid_icon.style.opacity = "1";
  };

  const handleShowhide = () => {
    setShow(!show);
  };
 
  const handleInputChange = e => {
    const password = e.target.value;

    if (password.match(/[A-Z]/) != null) {
      valid("test", "fa-check");
    }

    else {
      invalid("test", "fa-check" );
    }

    if (password.match(/[0-9]/) != null) {
      valid("num", "fa-check");
    }

    else {
      invalid("num", "fa-check");
    }

    if(password.match(/[!@#$%^&*]/) != null) {
      valid("char", "fa-check", "fa-times");
    }

    else {
      invalid("char", "fa-check", "fa-times");
    }

    if(password.length > 7) {
      valid("etc", "fa-check", "fa-times");
    }

    else {
      invalid("etc", "fa-check", "fa-times");
    }

  };

 

  return (
    <div className="App">
      <div className="container">
        
      <CgPassword size="50px"/>
        <input 
          type={show ? "text" : "password"}
          className='password'
          placeholder='Enter your password'
          onChange={handleInputChange}
        /> 

        <i onClick={showHide}></i>
        <p id="test">
          <FontAwesomeIcon onclick={handleShowhide} className='fa-times icon' icon={faTimes} id="show_hide"  />
          <FontAwesomeIcon onclick={handleShowhide} className='fa-check icon' icon={faCheck} id="show_hide"   />
          <span>Captial Letters</span>
        </p>
        <p id="num">
          <FontAwesomeIcon onclick={handleShowhide} className='fa-times icon' icon={faTimes} id="show_hide"   />
          <FontAwesomeIcon onclick={handleShowhide} className='fa-check icon' icon={faCheck} id="show_hide"  />
          <span>Use Numbers</span>
        </p>
        <p id="char">
        <FontAwesomeIcon onclick={handleShowhide} className='fa-times icon' icon={faTimes} id="show_hide"  />
          <FontAwesomeIcon onclick={handleShowhide} className='fa-check icon' icon={faCheck} id="show_hide"  />
          <span>Special Characters</span>
        </p>
        <p id="etc">
        <FontAwesomeIcon onclick={handleShowhide} className='fa-times icon' icon={faTimes} id="show_hide"  />
          <FontAwesomeIcon onclick={handleShowhide} className='fa-check icon' icon={faCheck} id="show_hide"   />
          <span>8+ Characters</span>
        </p>
        </div>
      </div>
  )
}
