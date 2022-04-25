import './App.css'

import { BiCheckDouble } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { CgPassword } from "react-icons/cg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faCheck, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState, showHide } from "react";


export default function App() {
  const [show, setShow] = useState(false);

  const handleInputChange = e => {
    const password = e.target.value;

   
    if (password.match(/[0-9]/) != null) {
      valid("num", "fa-check icon", "fa-times icon");
    } else {
      invalid("num", "fa-check icon", "fa-times icon");
    }

    if(password.match(/[!@#$%^&*]/) != null) {
      valid("char", "fa-check icon", "fa-times icon");
    } else {
      invalid("char", "fa-check icon", "fa-times icon");
    }

    if (password.match(/[A-Z]/) != null) {
      valid("test", "fa-check icon", "fa-times icon");
    } else {
      invalid("test", "fa-check icon", "fa-times icon" );
    }
  
    if(password.value.length > 7) {
      valid("more9", "fa-check icon", "fa-times icon");
    } else {
      invalid("more9", "fa-check icon", "fa-times icon");
    }

  };

  
  const valid = (item, v_icon, inv_icon) => {
    let text = document.querySelector(`#${item}`);
    text.style.opacity = "1";

    let valid_icon = document.querySelector(`#${item} .${v_icon}`)
    valid_icon.style.opacity = "1";

    let invalid_icon = document.querySelector(`#${item} .${inv_icon}`)
    invalid_icon.style.opacity = "0";

  };

  const invalid = (item, v_icon, inv_icon) => {
    let text = document.querySelector(`#${item}`);
    text.style.opacity = ".5";

    let valid_icon = document.querySelector(`#${item} .${v_icon}`)
    valid_icon.style.opacity = "0";

    let invalid_icon = document.querySelector(`#${item} .${inv_icon}`)
    invalid_icon.style.opacity = "1";
  };

  const handleShowhide = () => {
    setShow(!show);
  };
 

  const showHide = () => {


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
 

        {show ? (
          <FontAwesomeIcon icon={faEye} id="show_hideew" onClick={handleShowhide} />
        ) : ( 
          <FontAwesomeIcon icon={faEyeSlash} id="show_hide" onClick={handleShowhide} />
        )}

          <p id="num">
          <FontAwesomeIcon onclick={handleShowhide} className='fa-times icon' icon={faTimes} id="show_hideew"   />
          <FontAwesomeIcon onclick={handleShowhide} className='fa-check icon' icon={faCheck} id="show_hideew"  />
          <span>Use Numbers</span>
        </p>
        <p id="test">
          <FontAwesomeIcon onclick={handleShowhide} className='fa-times icon' icon={faTimes} id="show_hideew"  />
          <FontAwesomeIcon onclick={handleShowhide} className='fa-check icon' icon={faCheck} id="show_hideew"   />
          <span>Captial Letters</span>
        </p>
        
        <p id="char">
        <FontAwesomeIcon onclick={handleShowhide} className='fa-times icon' icon={faTimes} id="show_hideew"  />
          <FontAwesomeIcon onclick={handleShowhide} className='fa-check icon' icon={faCheck} id="show_hideew"  />
          <span>Special Characters</span>
        </p>
        <p id="more9">
        <FontAwesomeIcon onclick={handleShowhide} className='fa-times icon' icon={faTimes} id="show_hideew"  />
          <FontAwesomeIcon onclick={handleShowhide} className='fa-check icon' icon={faCheck} id="show_hideew"   />
          <span>8+ Characters</span>
        </p>
        </div>
      </div>
  )
}
