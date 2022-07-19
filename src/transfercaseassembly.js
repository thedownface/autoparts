import React from "react";
import Navbarmenu from "./Header2";
import MyForm from "./forms";
import HomeContent from "./content";
import "./Home.css";
import Footer from "./footer";
import Section from "./section";
import Testimonials from "./testimonials";
import Data from "./data";
function UsedTransferCaseAssembly()
{
   return(
   <div>
   <div className="usedengine">
  <Navbarmenu/>
    <div className="Homecontent"><HomeContent/></div>
  <MyForm/>
   </div>
   <div className="data">
    <Data data_heading="Used Transfer Case Assembly" data_paragraph="Vehicles with all and four-wheel drive require a transfer case. Activating your 4WD causes this powertrain component to transfer the power from the transmission to the front of your car. It also synchronizes the difference between the rotation of the front and rear wheels. Find the best used transfer case you need from our inventory at the right price."/>
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
export default UsedTransferCaseAssembly;