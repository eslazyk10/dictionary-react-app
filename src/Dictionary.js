import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword]= useState("");
    
    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function handleResponse(response){
        console.log(response.data[0]);
    }
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`

    axios.get(apiUrl).then(handleResponse)
    
    return(
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
            <input type="submit" value="Search" className="submit-btn" />
        </form>
    </div>
    );
}