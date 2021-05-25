import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import{ motion } from "framer-motion";



const ProductByCategory = () =>{
    let {category} =useParams();
    const[products,setProducts] = useState();
    useEffect(()=>{
        axios.get(`/api/products/${category}`)
        .then(res => setProducts(res.data))
    },[category])
return(
    <motion.div initial={{ opacity : 0}} animate={{opacity: 1}} exit={{opacity: 0}}>

        <div className="middle-box">
            <div className="left-box" style={{backgroundImage: "url(/images/slide1.jpg)"}}></div>
            <div className="right-box">

            <div className="title-page">{category}</div>
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


        
    </motion.div>
)
}

export default ProductByCategory