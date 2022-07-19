import React from "react";
import Navbarmenu from "./Header2";
import MyForm from "./forms";
import HomeContent from "./content";
import "./Home.css";
import Footer from "./footer";
import Section from "./section";
import Testimonials from "./testimonials";
import Data from "./data";
function UsedSteeringColumn()
{
   return(
   <div>
   <div className="usedengine">
   <Navbarmenu/>
    <div className="Homecontent"><HomeContent/></div>
  <MyForm/>
   </div>
   <div className="data">
    <Data data_heading="Used Steering Column" data_paragraph="A steering column connects your steering wheel to the steering mechanism. It may also be responsible for providing mounting for the multi-function switch, column writing, column lock, or transmission gear selector. Some steering columns are also equipped with a collapsible mechanism that deploys in the event of a collision to protect the driver. Get smooth, precision steering with our excellent used steering columns."/>
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
export default UsedSteeringColumn;