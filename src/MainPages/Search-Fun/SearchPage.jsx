import React, { useState } from "react";
import Search from "../Header/Search";
import Products from '../DemoJSON/Products';

function SearchPage(){
    const [searchTerms, setSearchTerms] = useState('');

    return(
        <div>
            <Search onSearch={setSearchTerms} />
            <Products searchTerms={searchTerms} />
        </div>
    )
}

export default SearchPage;