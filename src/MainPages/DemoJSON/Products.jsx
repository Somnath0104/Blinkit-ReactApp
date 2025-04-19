import React, { useState } from 'react';
import { Link } from "react-router-dom";

import JSON from '../JSONDB/db.json'; 

import ProductList from './ProductLists';

function Products () {
    //{searchTerms}
    const [title ] = useState("Product List");
    const [product ] = useState(JSON);

    // const filteredItems = JSON.Product1.filter(item =>
    //     item.name.toLowerCase().includes(searchTerms.toLowerCase())
    // );
    // constructor() {
    //     super();
    //     this.state = {                 
    //         title1: 'Products Page',
            
    //         products: JSON ,
                     
    //     }
    // }

    // function setHeading(name){
    //     setTitle(name);
    // }
   
        return (
           <section className="product-Section">
                <div className="Rows">
                    <div className="headingRow">
                        {/* <h2>{this.state.title1}</h2> */}
                        {/* { setHeading("Dairy, Bread & Eggs")} */}
                        <h2>{title}</h2>
                        <Link to="./run" className="aa" >see all</Link>
                    </div>
                   
                        <ProductList prodlist={product.Product1} />    
                        
                </div>
                <div className="Rows">
                    <div className="headingRow">
                        {/* <h2>{this.state.title1}</h2> */}
                        <Link to="./run" className="aa" >see all</Link>
                    </div>
                     
                        <ProductList prodlist={product.Product2} />  
                        
                </div>
                
                </section>
        )
    }


export default Products;