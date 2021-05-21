import React,{useState,useEffect} from 'react';
import axios from 'axios';

const ShoppingCart =() =>{
    
    const[products,setProducts] = useState();
    useEffect(()=>{
        axios.get('/api/products/cart')
        .then(res => setProducts(res.data))
        
        /* console.log(products) */
    },[])

    const[qty, setQty] = useState()
    
    /* const handleChange = (e) =>{
        const value = e.target.value;
        console.log(value)
        setQty(value)
        axios.patch('/api/products/cart/addqty',{
            productQty: qty
        })
    } */
    const addQty = (newQty) =>{
        /* let number = Number(newQty)  */
        setQty(newQty ++) 
        console.log(qty)
        
    }
   /*  const removeQty = () =>{
        axios.patch('/api/products/removeqty'),{
            setQty(qty = qty - 1)
        }
    } */

    const handleRemove =(id) =>{
        products.forEach(item=>{
            if(item.name === id){
                axios.delete(`/api/products/remove/${id}`) 
            }
        })
        //setProducts(products)
        
    }
    

    return(
        <div>
            <div className="middle-box">
                <div className="left-box" style={{backgroundImage: "url(/images/basket.jpg)"}}></div>
                <div className="right-box">
                    <h2>shoppingbag</h2>
                    <ul className="cart-box">
                    {products && products.map((item,i) =>{

                        return(
                        <li key={i} className="product-card cart"> 
                            <div>
                                <button onClick={() => handleRemove(item.name)}>remove product</button>
                                <img src={item.coverimage} alt="" className="image-box-cart"/>
                            </div>
                            <div className="cart-info">
                                <div className="product-name-cart">Name : {item.name}</div>
                                {/* <div className="product-category">Category : {item.category}</div> */}
                                <div className="product-price-cart">Price : {item.price} :-</div>
                                <div className="cart-qty">Qty : {item.productQty}</div>
                                <button onClick={()=> addQty(item.productQty)}>+</button>
                            
                            </div>
                        
                        

                        </li>
                        )
                    })}
                </ul>
                </div>
            </div>
            
        </div>
    )
}

export default ShoppingCart;