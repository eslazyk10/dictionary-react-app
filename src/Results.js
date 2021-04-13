import React from "react";
import Meaning from "./Meaning";

export default function Results(props){
    console.log(props.results);
    
    if (props.results){
          return(
    <div className="Results">
        <h2>{props.results.word}</h2>
        <ul>
            {props.results.meanings.map(function(meaning, index){
            return (
                <div key={index}>
                    <li>
                        <Meaning meaning={meaning}/>
                    </li>
                </div>
                );
        })}
        </ul>
    </div>
    );
    }else{
        return(null)
    }
}