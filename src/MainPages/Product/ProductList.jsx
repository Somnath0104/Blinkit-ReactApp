
import React from 'react';



const ProductList = (prodlist) => {         //functional component that accepts the products data passed to it

    //custom method, called from the view in the Render()  below
    const renderList = ({ prodlist }) => {    //temp argument that receives the data passed to this component by Products Component

        if (prodlist) {                       //if data exists
            return prodlist.map((data) => { //map() function iteratively executes once for each record, in the json data
                return (



                    // {/* <!--First Card--> */}
                    <div key={data.id} className="card2">
                        <div className="card">
                            <div className="img">
                                <img src={data.image} alt={data.name} />
                            </div>

                            <div>
                                <div className="min">
                                    15 mint
                                </div>

                                <div className="dis">
                                    {data.name}
                                </div>

                                <div className="Quntity">
                                    {data.quantity}
                                </div>

                                <div className="fl">
                                    <div className="price">
                                        {data.price}
                                    </div>

                                    <div className="add">
                                        <button type="button">ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>







                )
            })
        }
    }
    return (
        <div className='product-Row' >

            {renderList(prodlist)}  {/* Calls the above custom function to render the data in the view */}

        </div>
    )
}

export default ProductList;

