import React from "react";
import "./data.css"
function Data(props)
{
    return(
        <div>
            <div className="data">
                <div className="inner">
                <h1 className="data_heading">{props.data_heading} </h1>
                
                <p className="data_paragraph">{props.data_paragraph}</p>
            </div>
            </div>
        </div>
    );
}
export default Data