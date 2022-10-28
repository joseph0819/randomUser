import React from "react";
const Pages = ({pages,handlePageChange}) => {
    const currentPage = [...Array(pages).keys()].map(number => number + 1)
console.log(currentPage);
    return ( 
        
        currentPage.map(num => (
            <button className="btn" key={num} onClick={() =>handlePageChange(num)}>{num}</button>
        ))
       
     );
     
}
 
export default Pages;