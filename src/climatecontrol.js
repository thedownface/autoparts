import React from "react";
import Navbarmenu from "./Header2";
import MyForm from "./forms";
import HomeContent from "./content";
import "./Home.css";
import Footer from "./footer";
import Section from "./section";
import Testimonials from "./testimonials";
import Data from "./data";
function ClimateControl() 
{
   return(
   <div>
   <div className="usedengine">
  <Navbarmenu/>
    <div className="Homecontent"><HomeContent/></div>
  <MyForm/>
   </div>
   <div className="data">
    <Data data_heading="Used Climate Control Module" data_paragraph="Express Used Auto Parts can help you find Used Climate Control Module fast and easy. All Used Climate Control Module are inspected before being sold. Anything mechanical, is tested for function. We visually inspect for any cracks, leaks, damage, or issues before we put the parts in our inventory system. Our inventory of Used Climate Control Module is updated daily to insure fresh and up to date information for our customers."/>
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
export default ClimateControl;




