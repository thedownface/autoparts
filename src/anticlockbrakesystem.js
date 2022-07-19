import React from "react";
import Navbarmenu from "./Header2";
import MyForm from "./forms";
import HomeContent from "./content";
import "./Home.css";
import Footer from "./footer";
import Section from "./section";
import Testimonials from "./testimonials";
import Data from "./data";
function AntiClock()
{
   return(
   <div>
   <div className="usedengine">
  <Navbarmenu/>
    <div className="Homecontent"><HomeContent/></div>
  <MyForm/>
   </div>
   <div className="data">
    <Data data_heading="Used Anti lock Brake System" data_paragraph="Express Used Auto Parts can help you find Used Anti-Lock Brake System Parts fast and easy. We sell Used Anti-Lock Brake Pump and Used Anti-Lock Brake Module together as a complete Used Anti-Lock Brake System Unit. All Used Anti-Lock Brake System Parts are inspected before being sold. Anything mechanical, is tested for function. We examine the part visually for cracks, leaks, damages or other issues prior to place the components in our inventory system.. Our inventory of Used Anti-Lock Brake System Parts is updated daily to insure fresh and up to date information for our customers"/>
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
export default AntiClock;