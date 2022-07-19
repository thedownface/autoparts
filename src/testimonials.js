import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import a from "./a.jpeg"
import b from "./b.jpeg"
import c from "./c.webp"
import d from "./d.jpeg"
import e from "./e.webp"
import "./testimonials.css";
function Testimonials(props)
{
    return(<div className="testimonials">
        <div className="inner">
            <h1> Testimonials</h1>
            <div className="border"></div>
            <div className="row">
                <div className="column">
                    <div className="testimonial">
                        <img src={ a } className="a" alt="a"/>
                        <div className="name">Sarah k</div>
                        <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="testimonial">
                        <img src={ b } className="a" alt="a"/>
                        <div className="name">Sarah k</div>
                        <div className="stars">
                        <FontAwesomeIcon icon={faStar} className="1st_star" />
                        <FontAwesomeIcon icon={faStar}  className="2nd_star"/>
                        <FontAwesomeIcon icon={faStar}  className="3rd_star"/>
                        <FontAwesomeIcon icon={faStar}  className="4th_star"/>
                        <FontAwesomeIcon icon={faStar}  className="5th_star" />
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="testimonial">
                        <img src={ c } className="a" alt="a"/>
                        <div className="name">Sarah k</div>
                        <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="testimonial">
                        <img src={ d } className="a" alt="a"/>
                        <div className="name">Sarah k</div>
                        <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="testimonial">
                        <img src={ e } className="a" alt="a"/>
                        <div className="name">Sarah k</div>
                        <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                </div>
            </div>
            

            
            
        </div>

    </div>);
}
export default Testimonials