import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


const Products = () =>{

    const[products,setProducts] = useState();
    useEffect(()=>{
    axios.get(`/api/products/`)
    .then(res => setProducts(res.data))
    },[])
return(
    <div>
        <div className="middle-box">
            <div className="left-box" style={{backgroundImage: "url(/images/skateboard.jpg)"}}>
                <div className="title-box">
                    <h2 className="rotate title">Welcome to</h2>
                    <h2 className="title">Sinus WebShop</h2>
                </div>
            </div>
            <div className="right-box">
                <div className="title-page">Products</div>
                <div className="body-page">
                    <ul className="products-box">
                        {products && products.map((item,i) =>{
                            return(
                                <div key={i} >
                                    <Link className="product-link-box" to={'/singleproduct/' + item.name}>
                                        <li className="product-card"> 
                                            <img src={item.coverimage} alt="" className="image-box"/>
                                            <div className="product-name">{item.name}</div> 
                                            <div className="product-price">{item.price} :-</div>
                                        </li>
                                    </Link>
                            </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
)
}

export default Products