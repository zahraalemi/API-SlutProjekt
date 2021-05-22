import React,{ useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const SignUp = () =>{
    let history = useHistory();
    const [mail,setMail] = useState();
    const [pass,setPass] = useState();
    const [repass,setRepass] = useState();
    const [handle,setHandle] = useState();
    
    const signUp = (e) =>{
        
        e.preventDefault();
        axios.post("/api/products/signup", {
            email: mail,
            password: pass,
            confirmPassword: repass,
            handle:handle
        }).then((res)=>{
            console.log(res.data);
            history.push("/profile");
        }).catch((err)=>{
            console.log(err.response.data)
        })
    }
    
return(
    <div>
        <div className="middle-box">
            <div className="left-box" style={{backgroundImage: "url(/images/basket.jpg)"}}></div>
            <div className="right-box">
                <h2>Login</h2>
                <form onSubmit={signUp}>
                    <div>
                        <input placeholder="Enter Your Email" type="text" name="email" onChange={(e)=>setMail(e.target.value)}/>
                    </div>
                    <div>
                        <input placeholder="Enter Your Password" type="password" name="password" onChange={(e)=>setPass(e.target.value)}/>
                    </div>
                    <div>
                        <input placeholder="Enter Your Confirm Password" type="password" name="repassword" onChange={(e)=>setRepass(e.target.value)}/>
                    </div>
                    <div>
                        <input  placeholder="Enter Handle" type="text" name="handle" onChange={(e)=>setHandle(e.target.value)}/>
                    </div>
                
                    <button>Sign up</button>
                </form> 
            </div>
        </div>
        
    </div>
)
}
export default SignUp