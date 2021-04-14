import React from "react";



export default function Synonyms(props){
    console.log(props.synonyms)
    if (props.synonyms){
        return(
        <div className="Synonyms">
            <strong>Synonyms:</strong>{" "}
            <div className="synonymList">
            {props.synonyms.map(function(synonym, index){
                return(
                    <span key={index}>
                    {" "}{synonym},
                    </span>
                )
            })}
            </div>
        </div>
    );
    } else{
        return null;
    }
}