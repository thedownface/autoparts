import React from "react";
import Header from "./header";
import "./aboutus.css"
import Section from "./section";
import Footer from "./footer"
function Privacy()
{
    return(
        <div>
            <Header className="header"/>
        <div>
        <div className="aboutus">
    
    <div className="layer">
        <h1 className="topic_heading">OUR SHIPPING POLICY</h1>

        <p className="about_us"> <b>Express auto parts</b> offer a wide variety of warranty options and shipping options to make sure you are getting the best possible service. We understand that buying used auto parts can be daunting, so we have put together a few policies to help make your experience as smooth and stress-free as possible. </p>
        <p className="about_us">No labor costs are covered for any item that is sold from Express Used Auto Parts. If the part is damaged, we will attempt to repair it. If there is no replacement available, we will offer a refund of the entire amount of sale.</p>
      </div>
     
      </div>
      </div>
      <Footer/>
      </div>


    );
}
export default Privacy