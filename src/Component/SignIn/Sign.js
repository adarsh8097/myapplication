import React, { useState } from "react";
import './Sign.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io";
import { json, useNavigate } from "react-router-dom";

function SignIn(){
     let userdata= JSON.parse(localStorage.getItem('formdata'));
    let navigate = useNavigate();
     console.log("userData",userdata);
     console.log("userdataName:",userdata.name);
      const[data,setisData] = useState({
       email:"",
       password:"",

      });

      const handleInput =(e)=>{
        const{name,value} = e.target;
          setisData((prev)=>({
            ...prev,
            [name]:value,
          }))
        }
     const handleAlert=()=>{
        alert('Coming Soon');
     }

      
       const handleSubmit=(e)=>{
        e.preventDefault();
         if(data.email !== "" && data.password !==""){
            if(data.email === userdata.email && data.password === userdata.password){
                alert("Login Successfully");
                navigate('/Home');
            }else{
                alert("Invalid Credational");
            }
         }else{
            alert('Please fill all data');
         }
       }
    return(
        <div>
            
            <div className="container mainpart w-50">
            <form onSubmit={handleSubmit}>
               <div className="container bg-blue-600 login w-50 p-5 drop-shadow-lg">
               <h1 className="text-3xl font-bold sens-serif text-white text-3xl" style={{textAlign:"center",fontFamily:'serif'}}>Login </h1>
                <label htmlFor="email">username:</label>
                   <input type="email" name="email" value={data.email} onChange={handleInput} placeholder="Enter your username"/>
                   <label htmlFor="password">Password:</label>
                   <input type="password" name="password" value={data.password} onChange={handleInput} placeholder="Enter your password"/>
                    <a href="#" className="text-white p-4" style={{textDecoration:"none"}} onClick={handleAlert}>Forgot password ?</a>
                   <div>
                   <button className="btn border text-white font-bold uppercase  w-75 p-2 m-2" style={{letterSpacing:"2px",marginRight:"10px"}}>Submit</button>
                    </div>
                    <div className="m-2">
                    <a href="/" className="text-white" style={{textDecoration:"none"}}>New User or Sign Up Using..</a>
                    </div>
                    <div className="container text-white flex " style={{gap:"10px",marginLeft:"30px",cursor:"pointer"}}>
                     <div className=" p-2 icone bg-blue-900" onClick={handleAlert}>
                    <FaFacebookF/>
                    </div>
                    <div className=" p-2 icone bg-blue-400" onClick={handleAlert}>
                    <FaTwitter/>
                    </div>
                    <div className=" p-2 icone bg-red-600" onClick={handleAlert}>
                    <IoLogoGoogle/>
                    </div>
                </div>
                </div>
            </form>
           
            </div>
        </div>
    )
}

export default SignIn;
