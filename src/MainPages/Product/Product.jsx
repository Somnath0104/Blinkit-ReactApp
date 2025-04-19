import React, { Component } from 'react';
import { Link } from "react-router-dom";
//'React': is a default import. Default imports are exported with 'export default <classname>'. There is only one default export.
/* { }   : is used for a named import. Member imports that are exported with 'export <function/props/class>'. 
           There can be multiple member exports.*/

import JSON from './01List.json'; 
import JSON2 from './List2.json';       //ref to the db.json data file
import ProductList from './ProductList';

class Products extends Component {
    constructor() {
        super();
        this.state = {                 //state
            title1: 'Products Page',
            title2: 'soma',   //props
            //props
            products: JSON ,
            products2: JSON2           //asign the db.json data file to the prop
        }
    }
    render() {
        return (
           <section className="product-Section">
                <div className="Rows">
                    <div className="headingRow">
                        <h2>{this.state.title1}</h2>
                        <Link to="./run" className="a" >see all</Link>
                    </div>
                   
                        <ProductList prodlist={this.state.products} />  {/*pass data from .json file to ProductList component prop  */}
                        
                </div>
                
                </section>
        )
    }
}

export default Products;