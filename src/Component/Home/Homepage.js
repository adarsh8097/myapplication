import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import './Homepage.css'; // Assuming you have an external CSS file for styles
import { Link, Navigate, useNavigate } from "react-router-dom";

function HomePage() {
    // const navigate = useNavigate();
    //  const LogOut=()=>{
    //     let userdata= JSON.parse(localStorage.getItem('formdata'));
    //     console.log("Login userData:",userdata);
    //     localStorage.clear('formdata');
        
      
    //  }
    //  LogOut();
    return (
        <nav className="navbar">
            <div className="container-fluid p-1">
                <div className="navbar-brand" style={{marginLeft:"50px",cursor:"pointer"}}>
                   <Link to="/item"> <img 
                        src="https://hoblist.com/_next/image?url=%2Fimages%2FHoblist_logo.svg&w=1920&q=75" 
                        alt="brand-logo" 
                        width="100" 
                        height="100"
                    /></Link>
                </div>
                <div className="search-bar flex  p-2 w-25">
                    <FaMagnifyingGlass className="m-2 text-blue-800"/>
                    <input type="search" placeholder="Search" className="search-input"/>
                </div>
                <ul className="nav-links flex">
                <li className="nav-item"><Link to={'/Company'} className="text-white" style={{textDecoration:"none"}}>Conpany Info</Link></li>
                    <li className="nav-item">Categories</li>
                    <li className="nav-item">Celebrity</li>
                    <li className="nav-item">Posts</li>
                    <li className="nav-item">Feeds</li>
                    <li className="nav-item">News</li>
                    <li className="nav-item"><Link to={'/'} className="text-white" style={{textDecoration:"none"}}>LogOut</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default HomePage;
