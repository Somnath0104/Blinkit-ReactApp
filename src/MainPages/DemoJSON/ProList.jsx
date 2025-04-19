import React from 'react';



const ProList = (prodlist) => {        
    const renderList = ({ prodlist }) => {    

        if (prodlist) {                       
            return prodlist.map((data) => { 
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

            {renderList(prodlist)}  

        </div>
    )
}

export default ProList;

