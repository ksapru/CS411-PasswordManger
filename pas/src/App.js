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

    

    if (password.match(/[A-z]/) != null) {
      valid("test", "fa-check");
    }

    else {
      invalid("test", "fa-check" );
    }

    if (password.match(/[A-z]/) != null) {
      valid("number", "fa-check", "fa-times");
    }

    else {
      invalid("number", "fa-check", "fa-times");
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
          <FontAwesomeIcon className='fa-times icon' icon={faTimes} id="show_hide" onclick={showHide} />
          <FontAwesomeIcon className='fa-check icon' icon={faCheck} id="show_hide" onclick={showHide} />
          <span>Captial Letters</span>
        </p>
        <p id="number">
          <FontAwesomeIcon className='fa-times icon' icon={faTimes} id="show_hide" onclick={showHide} />
          <FontAwesomeIcon className='fa-check icon' icon={faCheck} id="show_hide" onclick={showHide} />
          <span>Use Numbers</span>
        </p>
        <p id="char">
        <FontAwesomeIcon className='fa-times icon' icon={faTimes} id="show_hide" onclick={showHide} />
          <FontAwesomeIcon className='fa-check icon' icon={faCheck} id="show_hide" onclick={showHide} />
          <span>Special Characters</span>
        </p>
        <p id="etc">
        <FontAwesomeIcon className='fa-times icon' icon={faTimes} id="show_hide" onclick={showHide} />
          <FontAwesomeIcon className='fa-check icon' icon={faCheck} id="show_hide" onclick={showHide} />
          <span>8+ Characters</span>
        </p>
        </div>
      </div>
  )
}
