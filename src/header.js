import React from "react";
import "./header.css"
import logo from "./logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faCaretDown} from "@fortawesome/free-solid-svg-icons";
import { f} from "@fortawesome/fontawesome-svg-core"


function Header()
{	
    const showMenu = (toggleId, navId)=>{
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
        if(toggle && nav){
          toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
            toggle.classList.toggle('bx-x')
          })
        }
    }
    showMenu('header-toggle','nav-menu')
    const navLink = document.querySelectorAll('.nav__link');   
    function linkAction(){
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));
  return(
	<div>
        <header className="header">
  <a href="#" className="header__logo">
  <div className="logo"></div>
  </a>
  <FontAwesomeIcon icon={faBars} className='bx bx-menu header__toggle' id="header-toggle"/>
  <nav className="nav" id="nav-menu">
    <div className="nav__content bd-grid">
    <div className="logo_name"><h4>EXPRESS USED <div>AUTO PARTS</div></h4></div>
      <div className="nav__menu">
        <ul className="nav__list">
          <li className="nav__item"><a href="/" className="nav__link active">HOME</a></li>
          <li className="nav__item"><a href="/About-us" className="nav__link">ABOUT</a></li>
          <li className="nav__item dropdown">
            <a href="#" className="nav__link dropdown__link">POLICY<FontAwesomeIcon icon={faCaretDown}/></a>
            <ul className="dropdown__menu">
              <li className="dropdown__item"><a href="\privacy-policy" className="nav__link">PRIVACY POLICY</a></li>
              <li className="dropdown__item"><a href="\warranty-policy" className="nav__link">WARRANTY POLICY</a></li>
              <li className="termsandconditions"><a href="#" className="nav__link">TERMS AND CONDITIONS</a></li>
            </ul>
          </li>
          <li className="nav__item"><a href="#parts-list" className="nav__link active">PARTS LIST</a></li>
          
          <li className="nav__item"><a href="#" className="nav__link"><button className="button">CONTACT US</button></a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>
	</div>
    

  );
  
}
export default Header