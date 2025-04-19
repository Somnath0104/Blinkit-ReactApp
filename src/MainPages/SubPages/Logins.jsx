import React from "react";
import './Logincss.css'
import { Link } from "react-router-dom";

function Logins(){
    return(
        <div>
            <div className="main">

<img src="Image/blinkit-seeklogo.png" alt="Logo" />

<h2>India's last minute app</h2>
<p>Log in or Sign up</p>

<div>
    <input type="number" name="" id="" />
</div>

<div>
    <button id="s">Continue</button>
</div>


<p className="p">
    By continuing you agree to our  <Link className="a">Terms of serrvice</Link> & <Link  className="a" >Privacy policy</Link>
</p>

</div>
        </div>
    )
}

export default Logins;