import React from "react";

import JSONBanner from '../JSONDB/db.json'
import { Link } from "react-router-dom";

function Banner1() {

    const renderList = (JSONBanner) => {

        if (JSONBanner.Banner1) {
            return JSONBanner.Banner1.map((data) => {
                return (

                    <div>
                        <Link to='/pannMasal'>
                        <div className="banner-Section">
                            <img src={data.img} alt={data.Name} />

                        </div >
                        </Link>
                    </div>
                )
            })
        }
    }
    const renderList2 = (JSONBanner) => {

        if (JSONBanner.Banner2) {
            return JSONBanner.Banner2.map((data) => {
                return (



                    <div key={data.id} className="Itam">
                        <Link to={data.Link}>
                        <img src={data.image} alt={data.Name} />
                        </Link>
                    </div>
                )
            })
        }
    }

    return (

        <div className='' >

            {renderList(JSONBanner)}
            <div className="order-Banner" >
                {renderList2(JSONBanner)}
            </div>
        </div>



    )
}

export default Banner1;