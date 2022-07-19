import React from "react";
import Navbarmenu from "./Header2";
import MyForm from "./forms";
import HomeContent from "./content";
import "./Home.css";
import Footer from "./footer";
import Section from "./section";
import Testimonials from "./testimonials";
import Data from "./data";
function UsedSuperCharger()
{
   return(
   <div>
   <div className="usedengine">
   <Navbarmenu/>
    <div className="Homecontent"><HomeContent/></div>
  <MyForm/>
   </div>
   <div className="data">
    <Data data_heading="Used Supercharger or Turbocharger" data_paragraph="A supercharger is an air compressor that increases the pressure of the air that is supplied to an internal combustion engine. They allow for the engine to burn more fuel and increase power. While a supercharger is directly connected to the engine, a turbocharger works with the exhaust system to increase power. Increase your car’s horsepower with our finest superchargers and turbochargers."/>
   </div>
   <div className="Testimonails_">
    <Testimonials/>
    </div>
   <div className="iiii">
      <Section/>
   </div>
   <Footer/>
   </div>

   
   )
   ;
}
export default UsedSuperCharger;