import React from "react";

function Search({onSearch}){
    
        const handleChanges = (e) =>{
            onSearch(e.target.value);
        };
    
    return(
        <input onChange={handleChanges} type="text" id="input" placeholder="search" />
    )
}

export default Search;