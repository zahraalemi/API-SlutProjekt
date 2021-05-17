import React,{useState,useEffect} from 'react';
import axios from 'axios';


const Skateboard = () =>{
    const[products,setProducts] = useState();
    useEffect(()=>{
        axios.get("/api/products/skateboard")
        .then(res => setProducts(res.data))
    },[])
return(
    <div>
        <ul>
            {products && products.map((item,i) =>{
                return(
                <li key={i} className="product-card"> 
                {/* {item.images && item.images.map(pic =>{
                    return <img src={pic} alt="" className="image-box"/>
                })} */}
                <img src={item.coverimage} alt="" className="image-box"/>
                <div className="product-name">Name : {item.name}</div>
                {/* <div className="product-category">Category : {item.category}</div> */}
                <div className="product-price">Price : {item.price} :-</div>
                {/* <div className="product-description">Description: {item.description}</div> */}
                {/* <div className="product-images">Images: {item.images}</div> */}
                

                </li>
                )
            })}
        </ul>
    </div>
)
}

export default Skateboard