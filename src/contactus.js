import React from "react";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons"
import { faContactCard } from "@fortawesome/free-solid-svg-icons"
import { faMailReply } from "@fortawesome/free-solid-svg-icons"
import Navbarmenu from "./Header2";
import Section from "./section";
import Footer from "./footer";
import "./contactus.css"
import "./forms.css"
function Contactus()
{
    const [name, setName] = useState("");
    const [phoneno, setNo]= useState("");
    const [email,setEmail]=useState("");
    return(<div>
       
        <div className="contactus">
        <Navbarmenu/>
        <div className="layer">
            <h1>CONTACT US</h1>
            <h5>EXPRESS USED AUTO PARTS</h5>
            <p className="location"><FontAwesomeIcon icon={faLocation} />11796 Cottonwood Creek</p>
            <p className="location">RdLewistown ,MT 59457,USA</p>
            <p><FontAwesomeIcon icon={ faContactCard }/></p>
            <p><FontAwesomeIcon icon={ faMailReply }/></p>
          </div>

            <div className="userform">
            <form >
      <div className="userdetails">
      <div className="input"><span className="details">Enter your name</span>
        <input 
          placeholder="Click here to Enter your name"
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input"><span className="details">Enter your phone number</span>
        <input
          placeholder="Click here to Enter your phone number"
          type="text" 
          value={phoneno}
          onChange={(e) => setNo
            (e.target.value)}
        />
      </div>
      <div className="input"><span className="details">Enter your email</span>
        <input
          placeholder="Click here to enter your email"
          type="text" 
          value={email}
          onChange={(e) => setEmail
            (e.target.value)}
        />

        
        </div>
        <div className="message"><span className="details">Enter your message</span>
        <input
          placeholder="Click here to enter your email"
          type="text" 
        />

        
        </div>

      <div class="button">
        <input
          type ="submit"
          value="SEARCH"
          />
      </div>
      
      </div>
     </form>
      </div>
  
    

           </div>
           <Section/>
           <Footer/>
    </div>);
}
export default Contactus