import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    
    return (  
        <>
        <div className="wrapper-home">
            <h1 className="countify">COUNTIFY</h1>
            <p className="message"> Your handy counter.Trusted for many years... </p>
            <Link className="link" to="/counterpage">click to go to counterpage</Link>
            <Link className="link" to="/about">about countify</Link>

            
            
        </div>
        </>
    );
}
 
export default Home;