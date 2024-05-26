import React from "react";
import HomePage from "../Home/Homepage";

function ConpanyInf(){
    return(
        <div>
            <HomePage/>
            <div className="container">
                <div className="card w-75">
                    <p> <strong>Company:</strong> Geeksynergy Technologies Pvt Ltd</p>
                    <p><strong>Address:</strong>  Sanjayanagar, Bengaluru-56</p>
                    <p style={{marginRight:"50px"}}><strong>Phone:</strong> XXXXXXXXX09</p>
                    <p><strong>Email:</strong>: XXXXXX@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default ConpanyInf;