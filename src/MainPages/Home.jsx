import React from "react";
import HEader from "./Header/HEader";
import Banner1 from "./BannerSection/Banner1";
import Fotter from "./Fotter/Fotter";
import Products from "./DemoJSON/Products";

function Home(){
    return(
        <div>
            <HEader />

            <Banner1 />
            
            {/* <Product  /> */}
            <Products />

            <Fotter />
            
        </div>
    )
}

export default Home;