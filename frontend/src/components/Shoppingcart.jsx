import React,{useState,useEffect} from 'react';
import axios from 'axios';

const ShoppingCart =() =>{
    
    const[products,setProducts] = useState();
    useEffect(()=>{
        axios.get('/api/products/cart')
        .then(res => setProducts(res.data))
        },[products])

    const[qty, setQty] = useState()
    
    const handleChange = (e) =>{
        const value = e.target.value;
        console.log(value)
        setQty(value)
        axios.patch('/api/products/cart/addqty',{
            productQty: qty
        })
    }
    const addQty = () =>{
        let newQty = qty 
        setQty(newQty + 1) 
        
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
        
    }
    

    return(
        <div>
            <h2>shoppingbag</h2>
            
            <ul className="cart-box">
            {products && products.map((item,i) =>{

                return(
                <li key={i} className="product-card cart"> 
                {/* {item.images && item.images.map(pic =>{
                    return <img src={pic} alt="" className="image-box"/>
                })} */}
                <div>
                <button onClick={() => handleRemove(item.name)}>remove product</button>
                <img src={item.coverimage} alt="" className="image-box-cart"/>
                </div>
                <div className="cart-info">
                <div className="product-name-cart">Name : {item.name}</div>
                {/* <div className="product-category">Category : {item.category}</div> */}
                <div className="product-price-cart">Price : {item.price} :-</div>
                <div className="cart-qty">Qty : {qty}</div>
                <button onClick={addQty}>+</button>
                {/* <button onClick={removeQty}>-</button> */}
                  <div className="qty">
                    <input  type="number" value={item.productQty} onChange={handleChange}></input>
                    
                    </div>
                </div>
                {/* <div className="product-description">Description: {item.description}</div> */}
                {/* <div className="product-images">Images: {item.images}</div> */}
                

                </li>
                )
            })}
        </ul>
        </div>
    )
}

export default ShoppingCart;