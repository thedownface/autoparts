import React from "react";
import usedengine2 from "./used_engine2.jpeg"
import Navbarmenu from "./Header2";
import MyForm from "./forms";
import HomeContent from "./content";
import "./Home.css";
import Footer from "./footer";
import Section from "./section";
import Testimonials from "./testimonials";
import Data from "./data";
import "./data.css"
function UsedEngine()
{
   return(
   <div>
   <div className="usedengine">
   <Navbarmenu/>
    <div className="Homecontent"><HomeContent/></div>
  <MyForm/>
   </div>
   <Data data1_heading="LOOKING FOR USED ENGINE ?"/>
   <div className="data1">
<Data data_paragraph="The engine is a vehicle’s main source of power, making it the heart of a car. Browse the variety of different engines at Express Used Auto Parts. From SUVs to pickup trucks to sports cars, we have the used engine you need. We specialize in every type of engine from American to imported makes and models. All of our gas, diesel, and hybrid engines are inspected and cleaned by professionals before shipping to you. We offer affordable, low-mileage, ready-to-install used engines that include all of their required components. It’s possible that your vehicle may support an engine that is several years newer than your vehicle. Our priority is to provide you with the best quality engine to get you back up and running smoothly again. We offer fast and free shipping to anywhere in the U.S. All of our used engines also come with a 30-day replacement warranty guarantee "/>
   
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
export default UsedEngine;