import React from "react";
import { Link } from "react-router-dom";

function Fotter(){
    return(

        <footer>
                <div className="footer-mid">

                    {/* <!--Upper Footer Part--> */}
                    <div className="footer-row1">

                        {/* <!--Left Upper Part--> */}
                        <div className="footer-left">
                            <h4>Useful Links</h4>
                            <div className="usefulLinks">

                                {/* <!--List 1--> */}
                                <ul>
                                    <li><Link>About</Link></li>
                                    <li><Link>Careers</Link></li>
                                    <li><Link>Blog</Link></li>
                                    <li><Link>Press</Link></li>
                                    <li><Link>Lead</Link></li>
                                    <li><Link>Value</Link></li>
                                </ul>

                                {/* <!--List 2--> */}
                                <ul>
                                    <li><Link>Privacy</Link></li>
                                    <li><Link>Terms</Link></li>
                                    <li><Link>FAQs</Link></li>
                                    <li><Link>Security</Link></li>
                                    <li><Link>Mobile</Link></li>
                                    <li><Link>Contact</Link></li>
                                </ul>

                                {/* <!--List 3--> */}
                                <ul>
                                    <li><Link>Partner</Link></li>
                                    <li><Link>Franchise</Link></li>
                                    <li><Link>Saller</Link></li>
                                    <li><Link>Warehouse</Link></li>
                                    <li><Link>Deliver</Link></li>
                                    <li><Link>Resources</Link></li>
                                </ul>

                            </div>

                        </div>

                        <div className="footer-right">
                            <div className="cat-div">
                                <h4>Categories</h4>
                                <Link>see all </Link>
                            </div>

                            {/* <!--Categories Liks--> */}
                            <div className="catLinks">

                                {/* <!--Lists 1--> */}
                                <ul>
                                    <li><Link>Vegetables & Fruits </Link></li>
                                    <li><Link>Cold Drinks & Juices</Link></li>
                                    <li><Link>Bakery & Biscuits</Link></li>
                                    <li><Link>Dry Fruits, Masala & Oil</Link></li>
                                    <li><Link>Paan Corner</Link></li>
                                    <li><Link>Pharma & Wellness</Link></li>
                                    <li><Link>Ice Creams & Frozen Desserts</Link></li>
                                    <li><Link>Beauty & Cosmetics</Link></li>
                                    <li><Link>Electronics & Electricals</Link></li>
                                    <li><Link>Toys & Games</Link></li>
                                </ul>

                                {/* <!--Lists 2--> */}
                                <ul>
                                    <li><Link>Dairy & Breakfast</Link></li>
                                    <li><Link>Instant & Frozen Food</Link></li>
                                    <li><Link>Sweet Tooth</Link></li>
                                    <li><Link>Sauces & Spreads</Link></li>
                                    <li><Link>Organic & Premium</Link></li>
                                    <li><Link>Cleaning Essentials</Link></li>
                                    <li><Link>Personal Care</Link></li>
                                    <li><Link>Magazines</Link></li>
                                    <li><Link>Stationery Needs</Link></li>
                                    <li><Link>Print Store</Link></li>
                                </ul>

                                {/* <!--Lists 2--> */}
                                <ul>
                                    <li><Link>Munchies</Link></li>
                                    <li><Link>Tea, Coffee & Health Drinks</Link></li>
                                    <li><Link>Atta, Rice & Dal</Link></li>
                                    <li><Link>Chicken, Meat & Fish</Link></li>
                                    <li><Link>Baby Care</Link></li>
                                    <li><Link>Home & Office</Link></li>
                                    <li><Link>Pet Care</Link></li>
                                    <li><Link>Fashion & Accessories</Link></li>
                                    <li><Link>Books</Link></li>
                                    <li><Link>E-Gift Cards</Link></li>
                                </ul>

                            </div>

                        </div>
                    </div>

                    <div className="footer-row2">

                    </div>
                </div>
            </footer>

    )
}

export default Fotter;