import React from "react";

export default function Meaning(props){

    return(
    <div className="Meaning">
        <h5 className="partOfSpeech">{props.meaning.partOfSpeech}</h5>
        
        <p className="definition">{props.meaning.definitions[0].definition}</p>
        <p className="example"><em>{props.meaning.definitions[0].example}</em></p>
    </div>
    );
}