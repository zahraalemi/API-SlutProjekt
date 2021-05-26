import React,{ useState } from "react";
import axios from 'axios';
import { useHistory, useParams, Link } from 'react-router-dom';
import{ motion } from "framer-motion";

const SignUp = () =>{
    let history = useHistory();
    const [mail,setMail] = useState();
    const [pass,setPass] = useState();
    const [message,setMessage] = useState('');
    const [message2,setMessage2] = useState('');
    let {userId} = useParams()
    
    const login = (e) =>{
        
        e.preventDefault();
        axios.post("/api/products/login", {
            email: mail,
            password: pass,
        }).then((res)=>{
            
            userId = res.data.token
            console.log(res.data)
            history.push(`/profile/${userId}`);
        }).catch((err)=>{
            setMessage(err.response.data.error)
            setMessage2(err.response.data.general)
        })
    }
    
return(
    <motion.div initial={{ opacity : 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
       
        <div className="middle-box">
            <div className="left-box" style={{backgroundImage: "url(/images/login.jpg)"}}></div>
            <div className="right-box">
            <div className="title-page">Login</div>
                <div className="body-page">
                    <form onSubmit={login}>
                    <div style={{color:"red"}}>{message}</div>
                    <div style={{color:"red"}}>{message2}</div>
                        <div>
                            <input placeholder="Email" type="text" name="email" onChange={(e)=>setMail(e.target.value)}/>
                        </div>
                        <div>
                            <input placeholder="Password" type="password" name="password" onChange={(e)=>setPass(e.target.value)}/>
                        </div>
                        
                        <button className="btn">Login</button>
                        <p style={{padding:"10px"}}><Link to={"/signup"}>You don't have an account?</Link></p>
                    </form> 
                </div>
            </div>
        </div>
        
    </motion.div>
)
}
export default SignUp