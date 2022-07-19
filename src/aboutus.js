import React from "react"
import Navbarmenu from "./Header2"
import "./Home.css";
import Footer from "./footer";
import Section from "./section";
import Testimonials from "./testimonials";
import Data from "./data";
import "./data.css"
import "./aboutus.css"
function Aboutus()
{
   return(
      <div className="aboutus">
      <Navbarmenu/>
      <div>
    <div>
    
    <div className="layer">
        <h1 className="topic_heading">ABOUT US</h1>
        <p className="about_us"><b>Express Used Auto Parts</b> is a family-owned and operated business that has been providing quality used auto parts to the community for over the years. We pride ourselves on our <b>exceptional customer service</b> and ability to find the right part for your car, no matter its make or model.</p>
      </div>
      </div>
      </div>
      <Testimonials/>
      <Section/>
      <Footer/>
      </div>

   
   );
}
export default Aboutus;