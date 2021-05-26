import React,{ useState } from "react";
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import{ motion } from "framer-motion";

const SignUp = () =>{
    let {userId} = useParams();
    let history = useHistory();
    const [mail,setMail] = useState();
    const [pass,setPass] = useState();
    const [repass,setRepass] = useState();
    
    const [message,setMessage] = useState('');
    const [message2,setMessage2] = useState('');
    const [isActive,setIsActive ] = useState(true);
    


    const handleCheckEmail = (e) =>{
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)){
            setMail(e.target.value)
            setMessage("")
        }else{
            setMessage("Email is Not Valid")
        }
    }
    const handleConfirmPass = (e) =>{
        if(repass === pass){
            setMessage2("")
            setIsActive(false)
        }else{
            setMessage2("Password is Not Match")
        }
    }
    const signUp = (e) =>{
        
        e.preventDefault();
        axios.post("/api/products/signup", {
            email: mail,
            password: pass,
            confirmPassword: repass,
            /* handle:handle */

        }).then((res)=>{
            userId = res.data.id;
            console.log(res.data)
            history.push(`/profile/${userId}`);
        }).catch((err)=>{
            console.log(err.response.data)
            setMessage(err.response.data.email)
            setMessage2(err.response.data.error)
        })
    
    }
    
return(
    <motion.div initial={{ opacity : 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <div className="middle-box">
            <div className="left-box" style={{backgroundImage: "url(/images/login.jpg)"}}></div>
            <div className="right-box">
            
                <div className="title-page">Sign Up</div>
                <div className="body-page">
                    <form onSubmit={signUp}>
                        <div>
                        <div style={{color:"red"}}>{message}</div>
                        <div style={{color:"red"}}>{message2}</div>
                            <input placeholder="Enter Your Email" type="text" name="email" onBlur={handleCheckEmail}/>
                        </div>
                        <div>
                            <input placeholder="Enter Your Password" type="password" name="password"  onBlur={handleConfirmPass} onChange={(e)=>setPass(e.target.value)}/>
                        </div>
                        <div>
                            <input placeholder="Enter Your Confirm Password" type="password" name="repassword" onBlur={handleConfirmPass} onChange={(e)=>setRepass(e.target.value)}/>
                        </div>
                        
                        
                    
                        <button className="btn" disabled={isActive}>Sign up</button>
                    </form> 
                </div>
            </div>
            
        </div>
        
    </motion.div>
)
}
export default SignUp