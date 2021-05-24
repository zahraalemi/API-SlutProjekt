import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Products = () =>{
    const[products,setProducts] = useState();
    useEffect(()=>{
        axios.get("/api/products")
        .then(res => setProducts(res.data))
    },[])

    /* const addToCatt = (product) =>{
        console.log(product)
        axios.post("/api/products/addtoCart", {
            name:product.name,
            price:product.price,
            image:product.image,
            quantity:1

        });
    } */
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
                <ul className="products-box">
                    {products && products.map((item,i) =>{
                        
                        return(
                            <div key={i} >
                        <Link className="product-link-box" to={'/singleproduct/' + item.name}>
                            <li className="product-card"> 
                            
                            <img src={item.coverimage} alt="" className="image-box"/>
                            <div className="product-name">{item.name}</div>
                            
                            <div className="product-price">Price : {item.price} :-</div>
                            </li>
                            {/* <button onClick={addToCatt(item)}>add to cart</button> */}
                        </Link>
                        
                        </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
)
}

export default Products