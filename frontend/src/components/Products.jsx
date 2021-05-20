import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Products = () =>{
    const[products,setProducts] = useState();
    useEffect(()=>{
        axios.get("/api/products")
        .then(res => setProducts(res.data))
    },[])

    const addToCatt = (product) =>{
        console.log(product)
        axios.post("/api/addtoCart", {
            name:product.name,
            price:product.price,
            image:product.image,
            quantity:1

        });
    }
return(
    <div>
        <h3>Best Selling</h3>
        <ul className="products-box">
            {products && products.map((item,i) =>{
                return(
                    <div key={i} >
                <Link to={'/singelproduct/' + item.name}>
                    <li className="product-card"> 
                    
                    <img src={item.coverimage} alt="" className="image-box"/>
                    <div className="product-name">{item.name}</div>
                    
                    <div className="product-price">Price : {item.price} :-</div>
                    </li>
                    <button onClick={addToCatt(item)}>add to cart</button>
                </Link>
                
                </div>
                )
            })}
        </ul>
    </div>
)
}

export default Products