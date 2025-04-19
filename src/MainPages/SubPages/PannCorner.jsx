import React from "react";
import HEader from "../Header/HEader";
import Fotter from "../Fotter/Fotter";

function PannCorner() {
    return (
        <div>
            <HEader />

            <section class="product-Section">

                {/* <!--First Row Item--> */}
                <div class="Rows">

                    <div class="headingRow">

                        <h2>Buy Paan Masala</h2>



                    </div>

                    <div class="product-Rows">

                        {/* <!--First Card--> */}
                        <div class="card2">
                            <div class="card">
                                <div class="img">
                                    <img src="../Image/sub category/paan corner/Lighters & Accessories.webp"  />
                                </div>

                                <div>
                                    <div class="min">
                                        15 mins
                                    </div>

                                    <div class="dis">
                                        Lighters & Accessories
                                    </div>

                                    <div class="Quntity">
                                        500 ml
                                    </div>

                                    <div class="fl">
                                        <div class="price">
                                            28 Rs.
                                        </div>

                                        <div class="add">
                                            <button type="button">ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <!--Second Card--> */}

                        <div class="card2">
                            <div class="card">
                                <div class="img">
                                    <img src="../Image/sub category/paan corner/Mouth Fresheners.webp"  />
                                </div>

                                <div>
                                    <div class="min">
                                        15 mins
                                    </div>

                                    <div class="dis">
                                        Mouth Fresheners
                                    </div>

                                    <div class="Quntity">
                                        500 ml
                                    </div>

                                    <div class="fl">
                                        <div class="price">
                                            28 Rs.
                                        </div>

                                        <div class="add">
                                            <button type="button">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!--Third Card--> */}

                        <div class="card2">
                            <div class="card">
                                <div class="img">
                                    <img src="../Image/sub category/paan corner/Paan.webp"  />
                                </div>

                                <div>
                                    <div class="min">
                                        15 mins
                                    </div>

                                    <div class="dis">
                                        Paan Masala
                                    </div>

                                    <div class="Quntity">
                                        500 ml
                                    </div>

                                    <div class="fl">
                                        <div class="price">
                                            28 Rs.
                                        </div>

                                        <div class="add">
                                            <button type="button">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!--Fourth Card--> */}

                        <div class="card2">
                            <div class="card">
                                <div class="img">
                                    <img src="../Image/sub category/paan corner/Smoking Cessation.webp" alt="" />
                                </div>

                                <div>
                                    <div class="min">
                                        15 mins
                                    </div>

                                    <div class="dis">
                                        Smoking Cessation
                                    </div>

                                    <div class="Quntity">
                                        500 ml
                                    </div>

                                    <div class="fl">
                                        <div class="price">
                                            28 Rs.
                                        </div>

                                        <div class="add">
                                            <button type="button">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>




            </section>


            <Fotter />
        </div>
    )
}

export default PannCorner;