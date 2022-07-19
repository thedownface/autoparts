import React from "react";
import MyForm from "./forms";
import HomeContent from "./content";
import "./Home.css";
import Navbarmenu from "./Header2";
import Footer from "./footer";
import Section from "./section";
import Testimonials from "./testimonials";
import Data from "./data";
function UsedTransmissions()
{
   return(
   <div>
   <div className="usedengine">
  <Navbarmenu/>
    <div className="Homecontent"><HomeContent/></div>
  <MyForm/>
   </div>
   <div className="data">
    <Data data_heading="USED TRANSMISSIONS" data_paragraph="The transmission is one of the most essential components for any car to run. They are responsible for changing the gears in your car depending on your speed. This frees the driver from having to shift gears manually. The transmission ensures that the right amount of power goes to your wheels. This keeps your revolutions per minute (RPMs) low and as a result, allows for decreased fuel consumption. The turning gears will also not overload your engine. With a large inventory of transmissions, you’ll be able to find just the right one you need to get you back on the road. We carry high-quality manual, automatic, and semi-automatic transmissions that will make your car reliable again. Find the right discount transmission you need at Express Used Auto Parts. We offer fast and free shipping on all used transmissions. Your transmission purchase is also backed by our 30-day replacement warranty guarantee."/>
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
export default UsedTransmissions;