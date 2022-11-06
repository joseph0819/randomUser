import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
    <>
    <div className="error-wrapper">
        <h1 className="error-head">404 page!</h1>
    <h3 className="message">Sorry!</h3>
    <p className="message">This page cannot be found</p>
    <Link to="/" className="link"> go back to home page...</Link>
    </div>
    </> 
    );
}
 
export default Errorpage;