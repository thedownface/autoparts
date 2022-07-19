import React,{useState} from 'react';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from './logo.png';
import { Link } from 'react-router-dom';
import "./header2.css"


const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

   

    return (
    <header className="header__middle">
        <div className="container">
            <div className="row">

                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <a exact activeClassName='is-active' to="/">
                        <img src={logo} alt="logo" /> 
                    </a>
                </div>

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                        <a exact activeClassName='is-active' onClick={toggleClass} href="/"> HOME </a> 
                    </li>
                    <li className="menu-item " ><a onClick={toggleClass} activeClassName='is-active' href='/About-us'> ABOUT US</a> </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> POLICY <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <a onClick={toggleClass} activeClassName='is-active'  href="/privacy-policy"> PRIVACY POLICY </a> </li>
                            <li><a onClick={toggleClass} activeClassName='is-active' href="/warranty-policy"> WARRANTY POLICY</a> </li>
                            <li><a onClick={toggleClass} activeClassName='is-active' href="/termsanconditions"> TERMS AND CONDITIONS</a> </li>
                        </ul>
                    </li>
                    <li className="menu-item " ><a onClick={toggleClass} activeClassName='is-active' href="/#parts-list"> PARTS LIST </a> </li>

                    </ul>


                    </nav>     
                </div>   



        
        
            </div>
	    </div>
    </header>
    )
}
export default Navbarmenu