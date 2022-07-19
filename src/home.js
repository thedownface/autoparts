import React from "react";
import Navbarmenu from "./Header2";
import MyForm from "./forms";
import HomeContent from "./content";
import "./Home.css"
import Footer from "./footer";
import ContactForm from "./form2";
import "./aboutus.css"
import Home2 from "./Home2";
function Home()
{
  return(
  <div><div className="Home">
  <div className="header">
  <Navbarmenu className="header"/></div>
    <div className="Homecontent"><HomeContent/></div>
  <div className="form11"><MyForm submitText='contact' /></div>
  </div>
  <div className="home2">
    <Home2/>n
    <Footer/>
  </div>
  
  </div>
  
  
 

  );
}
export default Home
