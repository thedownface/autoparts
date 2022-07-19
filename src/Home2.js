import React from "react";
import Cards from "./cards";
import "./Home.css";
import Section from "./section";
import Testimonials from "./testimonials";
import UsedEngine from "./usedengine";
import {a,Nava } from "react-router-dom";
import { getActiveElement } from "@testing-library/user-event/dist/utils";


function Home2()
{
   return(
      <div>
       <a name="parts-list">
       <h2 className="main_heading">OUR EXTREME USED AUTO PARTS</h2>
       <div className="Cards">
 
      
      <a href="/used-engine" onClick={ UsedEngine }><div className="card1"> <Cards heading="used engine" paragraph="All of our gas, diesel, and hybrid engines are inspected and cleaned by professionals before shipping to you. We offer affordable, low-mileage, ready-to-install used engines that include all of their required components. It’s possible that your vehicle may support an engine that is several years newer than your vehicle. "/>
      </div></a>
      <a href="/UsedTransmissions"><div className="card2"> <Cards heading="Used Transmissions" paragraph="The transmission ensures that the right amount of power goes to your wheels. This keeps your revolutions per minute (RPMs) low and as a result, allows for decreased fuel consumption. The turning gears will also not overload your engine.  "/>
      </div></a>
      <a href="/UsedInstrumentCluster"><div className="card3"> <Cards heading="Instrument Cluster" paragraph="A fully functioning instrument cluster is crucial in driving your car for any amount of time. We carry affordable used instrument cluster replacements to make sure you’re able to stay on top of your car’s status "/>
      </div></a>
      <a href="/UsedSteeringColumn"><div className="card4"> <Cards heading="Used Steering Column" paragraph="A fully functioning instrument cluster is crucial in driving your car for any amount of time. We carry affordable used instrument cluster replacements to make sure you’re able to stay on top of your car’s status "/>
      </div></a>
      <a href="/UsedRearAssembly"><div className="card5"> <Cards heading="Rear Axle Assembly" paragraph="This device contains the parts needed to transfer rotational force to the driving wheels. We have the right used rear axle assembly you need for your RWD car to drive safely and efficiently."/>
      </div></a> 
      <a href="/UsedDriverShaft"> <div className="card6"> <Cards heading="Used Driver Shaft" paragraph="This part is only present in four-wheel and rear-wheel drive vehicles where the transmission and axle are separate units. Improve the drivability and performance of your vehicle with our quality used driver shafts. "/>
      </div></a>
      <a href="/UsedSuperCharger"><div className="card7"> <Cards heading="Used Supercharger" paragraph="Increase your car’s horsepower with our finest superchargers and turbochargers. "/>
      </div></a>
      <a href="/UsedTransferCaseAssembly"><div className="card8"> <Cards heading="Case Assembly" paragraph="Find the best used transfer case you need from our inventory at the right price. "/>
      </div></a>
      <a href="/UsedTransferCaseAssembly"><div className="card9"> <Cards heading="Anti Clock Brake System" paragraph="Express Used Auto Parts can help you find Used Anti-Lock Brake System Parts fast and easy. we sell Used Anti-Lock Brake Pump and Used Anti-Lock Brake Module together as a complete Used Anti-Lock brake system unit. "/>
      </div></a>
      <a href="/UsedTransferCaseAssembly"><div className="card10"> <Cards heading="Shifter Assembly" paragraph="Express Used Auto Parts can help you find Used Floor Shift Assembly or Paddle Shifter fast and easy. All Used Floor Shift Assembly or Paddle Shifter are inspected before being sold. Anything mechanical, is tested for function."/>
      </div></a>
      <a href="/UsedTransferCaseAssembly"><div className="card11"> <Cards heading="Climate Control Module" paragraph="Express Used Auto Parts can help you find Used Climate Control Module fast and easy. All Climate Control Module are inspected before being sold. Anything mechanical, is tested for function.
"/>
      </div></a>
      <a href="/UsedTransferCaseAssembly"><div className="card12"> <Cards heading=" Used Air Bag" paragraph="If you need Used Airbags, then Express Used Auto Parts is the best place. All Used Airbags are inspected before being sold. We visually inspect for any cracks, leaks, damage, or issues before we put the parts in our inventory system. "/>
      </div></a>
      </div>
      </a>
      <div className="Testimonails_">
         <Testimonials/>
         
      </div>
      <div className="iiii">
      <Section/>
     </div>
      </div>
      
   );

}export default Home2