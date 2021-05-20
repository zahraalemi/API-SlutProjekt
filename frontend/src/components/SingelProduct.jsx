import React,{useState,useEffect} from 'react';
import axios from 'axios';
/* import { useParams } from 'react-router-dom'; */



const SingelProduct = (props) =>{
   /*  let {name} =useParams(); */
    let product = props.match.params.name;
    
    const[products,setProducts] = useState();
    useEffect(()=>{
        axios.get(`/api/products/singelproduct/${product}`)
        .then(res => setProducts(res.data))
    },[])

    const addToCatt = (item) =>{
        axios.post("/api/addtocart", {
            
            name:item.name,
            price:item.price,
            image:item.image,
            quantity:1
        });
    }

return(
    <div>
        
        <ul className="products-box">
            {products && products.map((item,i) =>{
                return(
                <li key={i} className="product-card"> 
                <button onClick={addToCatt(item)}>add to cart</button>
                {item.images && item.images.map(pic =>{
                    return <img src={pic} alt="" className="image-box"/>
                })}
                <img src={item.coverimage} alt="" className="image-box"/>
                <div className="product-name">{item.name}</div>
                <div className="product-category">Category : {item.category}</div>
                <div className="product-price">Price : {item.price} :-</div>
                <div className="product-description">Description: {item.description}</div>
                <div className="product-images">Images: {item.images}</div>
                

                </li>
                
                )
            })}
        </ul>
    </div>
)
}
export default SingelProduct
