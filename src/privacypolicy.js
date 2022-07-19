import React from "react";
import Navbarmenu from "./Header2";
import "./aboutus.css"
import Section from "./section";
import Footer from "./footer"
function Privacy()
{
    return(
        <div>
            <Navbarmenu className="header"/>
        <div>
        <div className="aboutus">
    
    <div className="layer">
        <h1 className="topic_heading">PRIVACY POLICY</h1>

        <h4 className="topic"> Information Collection</h4>
        <p className="about_us"><b>Express Used Auto Parts</b> is the sole owner of any personal information that you volunteer on this site. We will not use or share your information with anyone except as described in this Privacy Policy.
          </p>

          
          <p className="about_us">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information (“Personal Information”) may include, but is not limited to:
          <ul >
<li >1. Name</li>
<li>2. Email address</li>
<li>3. Telephone number</li>
<li>4. Address</li></ul></p>
<h4 className="topic">Logged Files</h4>
<p className="about_us"> When you deal with <b>Express used Auto Parts</b>, we will send you a confirmation email so that you can ensure that your contact information is accurate. <b>Items are shipped within 24 hours on business days.</b> We are committed to protecting the security of your personal information and our clients’ personal information in all cases. </p>
      </div>
     
      </div>
      </div>
      <Footer/>
      </div>


    );
}
export default Privacy