import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle,faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import{ motion } from "framer-motion";


const ShoppingCart =() =>{
    
    const[products,setProducts] = useState();
    useEffect(()=>{
        axios.get('/api/products/cart')
        .then(res => setProducts(res.data))
        
    },[])
    
    const addQty = (value) =>{
        products.forEach(item =>{
            if(value.name === item.name){
                item.productQty ++
                setProducts([...products])
                axios.patch(`/api/products/addqty/${value.name}`,{
                   
                    productQty: item.productQty
                })
                console.log(products)
            }
           
        })
          
    }

   const removeQty = (value) =>{
    if(value.productQty > 1){
    products.forEach(item =>{
        if(value.name === item.name){
            item.productQty = value.productQty - 1
            setProducts([...products])
            axios.patch(`/api/products/addqty/${value.name}`,{
                
                productQty: item.productQty
            })
            console.log(products)
        }
       
    })
       } 
    }  

    const handleRemove =(id) =>{
        products.forEach(item=>{
            if(item.name === id){
                axios.delete(`/api/products/remove/${id}`) 
                let newCartArray = products.filter((el) => el.name !== id)
                setProducts(newCartArray)
            }
        })
        
    }
    

    return(
        <motion.div initial={{ opacity : 0}} animate={{opacity: 1}} exit={{opacity: 0}}>

            <div className="middle-box">
                <div className="left-box" style={{backgroundImage: "url(/images/basket.jpg)"}}></div>
                <div className="right-box">
                <div className="title-page">Shopping Cart</div>
                <div className="body-page">
                    <ul className="cart-box">
                    <li  className="basket-row"> 
                            
                            <div>
                                
                            </div>
                            
                            <div className="product-name-cart">Name </div>
                            <div className="product-price-cart">Price </div>
                            
                            <div>
                                <div className="cart-qty">Qty</div>
                            </div>
                            <div> total price</div>
                            <div></div>
                    </li>
                {/*     <li  className="basket-row"> 
                            
                                <div>
                                    <img src="/images/sinus-skateboard-corona.png" alt="" className="image-box-cart"/>
                                </div>
                                
                                <div className="product-name-cart">SkateBoard</div>
                                <div className="product-price-cart">110:-</div>
                                <div className="qty-box">
                                    <button style={{ color : "green"}}>
                                        <FontAwesomeIcon icon={faPlusCircle} />
                                    </button>
                                    <div className="cart-qty">2</div>
                                    <button  style={{ color : "red"}}><FontAwesomeIcon icon={faMinusCircle} /></button>
                                    
                                </div>
                                <div> 220:-</div>
                                <button  style={{ color : "red"}}><FontAwesomeIcon icon={faTrashAlt} /></button>

                                
                            
                            
                        </li> */}
                    {products && products.map((item,i) =>{

                        return(
                        <li key={i} className="basket-row"> 
                        
                                <div>
                                    <img src={item.coverimage} alt="" className="image-box-cart"/>
                                </div>
                                
                                <div className="product-name-cart">{item.name}</div>
                                <div className="product-price-cart">{item.price} :-</div>
                                    <div className="qty-box">
                                    <button onClick={()=> addQty(item)} style={{ color : "green"}}>
                                        <FontAwesomeIcon icon={faPlusCircle} />
                                    </button>
                                    <div className="cart-qty">{item.productQty}</div>
                                    <button  onClick={() => removeQty(item)} style={{ color : "red"}}>
                                        <FontAwesomeIcon icon={faMinusCircle} /></button>
                                    
                                </div>
                                <div> {item.productQty * item.price}:-</div>
                                    <button  onClick={() => handleRemove(item.name)} style={{ color : "red"}}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                
                        </li>
                        )
                    })}
                </ul>
                </div>
                </div>
            </div>
            
        </motion.div>
    )
}

export default ShoppingCart;