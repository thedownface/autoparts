import React from "react";
import Navbarmenu from "./Header2";
import MyForm from "./forms";
import HomeContent from "./content";
import "./Home.css";
import Footer from "./footer";
import Section from "./section";
import Testimonials from "./testimonials";
import Data from "./data";
function ShifterAssembly()
{
   return(
   <div>
   <div className="usedengine">
  <Navbarmenu/>
    <div className="Homecontent"><HomeContent/></div>
  <MyForm/>
   </div>
   <div className="data">
    <Data data_heading="Used Shifter Assembly" data_paragraph="Express Used Auto Parts can help you find Used Floor Shift Assembly or Paddle Shifter fast and easy. All Used Floor Shift Assembly or Paddle Shifter are inspected before being sold. Anything mechanical, is tested for function. We visually inspect for any cracks, leaks, damage, or issues before we put the parts in our inventory system. Our inventory of Used Floor Shift Assembly or Paddle Shifter is updated daily to insure fresh and up to date information for our customers."/>
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
export default ShifterAssembly;




