import React from "react";

export default function Header(){
    return(
        <div className="Header">
            <h1>
        <img src="https://www.filipinostatic.com/images/section_icons/dictionary2.png" alt="logo" width="100"/> 
        {" "}<span className="Title">Dictionary</span>{" "}
        <img src="https://www.filipinostatic.com/images/section_icons/dictionary2.png" alt="logo" width="100"/>
        </h1>
        <h5>
          What would you like to define...
        </h5>
        </div>
    )
}