import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Header = () =>{
    
    const[products,setProducts] = useState();
    useEffect(()=>{
        axios.get('/api/products/cart')
        .then(res => setProducts(res.data.length))
        
    },[])
 return( 
     <div className="header">
         <div className="left-header">
             <div className="logo">
                 <Link to="/"><img className="sinus-logo" src="images/sinus-logo-landscape.svg" alt="" /></Link>
             </div>
         </div>
         <div className="menu">
            <ul className="category-menu">
                <li><Link className="link-style" to={"/skateboard"}>Skateboard</Link></li>
                <li><Link className="link-style" to={"/t-shirt"}>T-shirt</Link></li>
                <li><Link className="link-style" to={"/hoodie"}>Hoodie</Link></li>
                <li><Link className="link-style" to={"/caps"}>Caps</Link></li>
                <li><Link className="link-style" to={"/wheel"}>Wheel</Link></li>
            </ul>
        </div>
        <div className="right-header">
            <div className="member-box">
                <Link to={"/login"}>
                    <FontAwesomeIcon icon={faUserCircle} />
                </Link>
                </div>
            <div className="basket-box">
                <Link to={"/cart"}>
                    <FontAwesomeIcon icon={faShoppingBag} />
                    
                </Link>
                <div className="cart-number">
                    {products}
                    </div>
            </div>
        </div>
     </div>
 )
}

export default Header