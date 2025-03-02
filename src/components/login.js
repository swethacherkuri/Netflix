import { useRef, useState } from "react";
import Header from "./header";
import { checkvalidate } from "../utils/validate";


import { useNavigate } from "react-router-dom";


const Login =()=>{
    const navigate =useNavigate();
    const[errormessage,seterrormessage]=useState(null);
    const email =useRef(null);
    const password=useRef(null);
    const[signin,Setsignin]=useState(true);
    const togglehandleclick=()=>{
       Setsignin(!signin)
    }
    const validatesignin=()=>{
        const message =checkvalidate(email.current.value,password.current.value);
       
        
        seterrormessage(message);
    if(message === "null"){
        if(email.current.value === "swethacherkuri34@gmail.com" && password.current.value === "Swetha@34"){
            navigate("/browser");
        }
        else{
            navigate("/")
        }
    }
  

    }
    return(

        <div>
            
     
    <Header/>
   
    <form className="login-form" onSubmit={(e)=>e.preventDefault()}>
    
        <h1 className="sign-in-heading">Sign In</h1>
        <input ref={email} className="email" type="text" placeholder="Email or Mobile number"/>
         <input   ref={password}className="password"type="password" placeholder="password"/>
         <p className="error-message">{errormessage}</p>
        <button className="signin" type="submit" onClick={validatesignin} >{signin ?"signin":"signUp"}</button>
        <h3 className="sign-in-heading">OR</h3>
        <button className="Use-a-sign-in-Code">Use a sign-in Code</button>
        <button className="forgot-password">Forgot password</button>
        <h4 className="sign-in-heading">Remember me</h4>
        <h4 className="sign-in-heading-now" onClick={togglehandleclick}>New to Netflix?sign up now</h4>

    </form>
    <div  >
        <img  className="background-image" src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg" alt="bg-image"/>
    </div>
    
       </div>
    )


}
export default Login;