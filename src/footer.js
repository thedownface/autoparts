import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation} from "@fortawesome/free-solid-svg-icons";
import logo from "./logo.png"
function Footer()
{
    return(
        <footer  className="footer">
  	 <div  className="container1">
  	 	<div  className="row">
         <img src={ logo } alt="Express used auto parts" className="footer_logo"/>

  	 		<div  className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="/">Home</a></li>
  	 				<li><a href="#">About us</a></li>
  	 				<li><a href="#">Parts list</a></li>
  	 				<li><a href="#">Privacy Policy</a></li>
  	 			</ul>
  	 		</div>
  	 		<div  className="footer-col">
  	 			<h4>CONTACT US</h4>
  	 			<ul>
  	 				<li><p><FontAwesomeIcon icon={faLocation}/>Express used auto parts</p>
                        <p>11796 Cottonwood Creek</p>
						<p>RdLewistown ,MT 59457,USA</p>
                    </li>
  	 				<li><a href="#">sales@extremeautoparts.com</a></li>
  	 				<li><a href="#"></a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div  className="footer-col">
				<p>©</p>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    );
} 
export default Footer