import React,{ useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const SignUp = () =>{
    let history = useHistory();
    const [mail,setMail] = useState();
    const [pass,setPass] = useState();

    
    const login = (e) =>{
        
        e.preventDefault();
        axios.post("/api/products/login", {
            email: mail,
            password: pass,
        }).then((res)=>{
            console.log(res.data);
            history.push("/profile");
        }).catch((err)=>{
            console.log(err.response.data)
        })
    }
    
return(
    <div>
        <form onSubmit={login}>
            <div>
                <label>Email</label>
                <input type="text" name="email" onChange={(e)=>setMail(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" onChange={(e)=>setPass(e.target.value)}/>
            </div>
          <button>Login</button>
        </form> 
    </div>
)
}
export default SignUp