import React from "react";
import Navbarmenu from "./Header2";
import MyForm from "./forms";
import HomeContent from "./content";
import "./Home.css";
import Footer from "./footer";
import Section from "./section";
import Testimonials from "./testimonials";
import Data from "./data";
function UsedInstrumentCluster()
{
   return(
   <div>
   <div className="usedengine">
   <Navbarmenu/>
    <div className="Homecontent"><HomeContent/></div>
  <MyForm/>
   </div>
   <div className="data">
    <Data data_heading="Used Instrument Cluster" data_paragraph="The instrument cluster, which lies on the dashboard, communicates important details about your car while driving. The gauges and indicators on it include the speedometer, fuel gauge, odometer, oil pressure gauge, and turn signal indicators. A fully functioning instrument cluster is crucial in driving your car for any amount of time. We carry affordable used instrument cluster replacements to make sure you’re able to stay on top of your car’s status."/>
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
export default UsedInstrumentCluster;