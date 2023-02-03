import React from "react";
import { Link } from "react-router-dom";
const About = () => {
    return ( 
    <>
    <div>
    <div className="wrapper-home">
            <h1 className="countify"> ABOUT COUNTIFY</h1>
            <p className="message"> Countify has served tirelessly for years as your on-the-go counter app. It is built to simplify your counting experience. </p>
            <Link to="/" className="link"> go back to home page...</Link>
            <Link className="link" to="/counterpage">click to go to counterpage</Link>
            
        </div>
    </div>
    </> );
}
 
export default About;