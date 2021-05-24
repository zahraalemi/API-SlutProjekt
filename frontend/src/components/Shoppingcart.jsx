import React,{useState,useEffect} from 'react';
import axios from 'axios';

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
                
                axios.patch(`/api/products/addqty/${value.name}`,{
                   
                    productQty: item.productQty
                })
                console.log(products)
            }
           
        })
          
    }

   const removeQty = (value) =>{

    products.forEach(item =>{
        if(value.name === item.name){
            item.productQty = value.productQty - 1
            
            axios.patch(`/api/products/addqty/${value.name}`,{
                   
                productQty: item.productQty
            })
            console.log(products)
        }
       
    })
        
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
                                <button onClick={()=> addQty(item)}>+</button>
                                <button onClick={() => removeQty(item)}>-</button>
                            
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