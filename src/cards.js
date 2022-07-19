import React from "react";
import "./layouts.css"

function Cards(props)
{
    return(<div><div className="Card">
        <h4 className="headings">{props.heading}</h4>
        <p className="paragraphs">{props.paragraph}</p>
    </div></div>);
}
export default Cards;