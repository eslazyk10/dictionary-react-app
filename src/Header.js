import React from "react";

export default function Header(){
    return(
        <div className="Header">
            <h1>
        <img src="https://www.filipinostatic.com/images/section_icons/dictionary2.png" alt="logo" width="75"/> 
        {" "}<span className="Title">Dictionary</span>{" "}
        <img src="https://www.filipinostatic.com/images/section_icons/dictionary2.png" alt="logo" width="75"/>
        </h1>
        <h6>
          What would you like to define...
        </h6>
        </div>
    )
}