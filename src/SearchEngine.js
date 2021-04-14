import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./SearchEngine.css";

export default function Dictionary(){
    let [keyword, setKeyword]= useState("");
    let [results, setResults]= useState(null);
    
    function search(event){
        event.preventDefault();
        // documentation: https://dictionaryapi.dev/e
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function handleResponse(response){
        setResults(response.data[0]);
    }
    
    return(
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" autoFocus={true} className="search" onChange={handleKeywordChange}/>
            <input type="submit" value="Search" className="submit-btn" />
        </form>
        <Results results={results}/>
    </div>
    );
}