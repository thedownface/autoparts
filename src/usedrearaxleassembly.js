import React from "react";
import Navbarmenu from "./Header2";
import MyForm from "./forms";
import HomeContent from "./content";
import "./Home.css";
import Footer from "./footer";
import Section from "./section";
import Testimonials from "./testimonials";
import Data from "./data";
function UsedRearAssembly()
{
   return(
   <div>
   <div className="usedengine">
   <Navbarmenu/>
    <div className="Homecontent"><HomeContent/></div>
  <MyForm/>
   </div>
   <div className="data">
    <Data data_heading="Used Rear Axle Assembly" data_paragraph="A rear axle assembly is a rod that connects the back tires for vehicles that have rear-wheel drive. This device contains the parts needed to transfer rotational force to the driving wheels. We have the right used rear axle assembly you need for your RWD car to drive safely and efficiently."/>
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
export default UsedRearAssembly;