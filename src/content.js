import React from "react";
import "./content.css"
function HomeContent()
{ return(
    <div>
    <ul className="home_content">
    <li className="first_heading"> Looking For Used Auto Parts?</li>
    <li className="second_heading"> <p>Find Used Auto Parts In 'A' Grade Condition
                                    by filling the form below  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></li>
                                    
    <li className="third_heading"> <p>One of our representative will get
                                    in touch with you shorty.</p></li>
    <li className="offer"> Or Call Us Now TO GET 20% OFF</li>
    <li><button className="call_us_now" value="Call us now!!">Call us now</button></li>
    </ul>
    </div>
);
}
export default HomeContent;