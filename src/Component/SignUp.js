import React, { useState } from "react";
import './SignUp.css';
import { Form, Link, useNavigate } from "react-router-dom";

function SignUp(){
    const navigate = useNavigate();
    const[data ,setisData] = useState({
        name:"",
        email:"",
        phone:"",
        profection:"",
        password:"",
        cnfpassword:""
    });

     const handleInput =(e)=>{
        const{name,value} = e.target ;
        if(name === "phone" && !/^\d*$/.test(value)){
            return;
        }
        setisData((prev)=>({
            ...prev,
            [name]:value
        }));

     };

     

     const handleSubmit =(e)=>{
        e.preventDefault();

        if(data.name !== "" && data.email!=="" && data.phone!=="" && data.profection !=="" && data.password !=="" && data.cnfpassword !==""){
            if(data.password !==data.cnfpassword){
                alert('Password do not match');
            }else{
        //    let userdata =  localStorage.setItem('formdata',JSON.stringify(handleData));
         localStorage.setItem('formdata', JSON.stringify(data));
             alert('Register Successfully');
             navigate('/');
             }
        }
        else{
            alert('Please fill all details carefully');
        }
     }
console.log("Prod=fection:",data.profection);
    const optionsArray = [
       
        { "value": "SofterDeveloper", "text": "SofterDeveloper" },
        { "value": "Teacher", "text": "Teacher"},
        { "value": "Docter", "text": "Docter" },
        { "value": "Police", "text": "Police" }
    ];
    return(
        <div className="container formfile w-50 p-2" style={{marginTop:"20px"}}>
            <div className="p-4">
                <div className="container  w-75 drop-shadow-2xl ">
                  <form onSubmit={handleSubmit}>
                 
                    <div className="flex row signupform drop-shadow-sm p-3">
                    <h1 className="text-3xl font-bold sens-serif text-white text-3xl" style={{textAlign:"center",fontFamily:'serif'}}>SignUp </h1>
                
                  <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={data.name} onChange={handleInput} placeholder="Enter your name"/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={data.email} onChange={handleInput} placeholder="Enter your email"/>
                    <label htmlFor="phone">Phone-number:</label>
                    <input type="tel" id="phone" name="phone" value={data.phone} onChange={handleInput} placeholder="Enter your phonenumber" minLength={10} maxLength={10}/>
                    <label htmlFor="profection">Profession</label>
                    <select name="profection" id="profection" value={data.profection} onChange={handleInput} placeholder="Choose Profection">
                    {optionsArray.map((option, index)=>(
                        <option key={index} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                    
                    </select>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Create Password" value={data.password} onChange={handleInput} minLength={4}/>
                     <label htmlFor="cnfpassword">Cnf-Password</label>
                     <input type="cnf-password" id="cnf-password" name="cnfpassword" placeholder="Please cnf Password" value={data.cnfpassword} onChange={handleInput} minLength={4} />
                      <p className="text-white p-3"> Already a member ? <Link to="/" className="text-white font-bold " style={{textDecoration:"none"}}>Log In</Link></p>
                     <div>
                        <button className="btn border text-white font-bold uppercase  w-100 p-2 m-2" style={{letterSpacing:"2px"}}>Submit</button>
                     </div>
                    </div>

                  </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;