import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';





const SingleProduct = () =>{
    const {name} = useParams();
    const history = useHistory()

    const [qty, setQty] = useState(1)

    const[products,setProducts] = useState();

    useEffect(()=>{
        axios.get(`/api/products/singleproduct/${name}`)
        .then(res => setProducts(res.data))
        .catch(error => {console.log(error)})
        
        console.log(products)
    },[])

    

    /* const getproduct = async () =>{
        await axios.get("/api/products")
        .then(res => res.data.forEach(item =>{
            if(item.name === props.match.params.name){ 
                let product = item
                products.push(product)
                console.log(product) 
                
            }
        })) 

    } */
    const handleAddToCart = (e) =>{
        e.preventDefault()
        products.forEach(item=>{
           let product = {
                name: item.name,
                price: item.price,
                coverimage: item.coverimage,
                productQty: qty
           }
           axios.post('/api/products/addtocart', {
            name: product.name,
            price: product.price,
            coverimage: product.coverimage,
            productQty: product.productQty
         })
        })
        console.log(products)
        
        
        
        history.push('/cart')

    }
    const handleChange = (e) =>{
        const value = e.target.value;
        console.log(value)
        setQty(value)
    }

    
    //let product = products.products.find(x => x.name === props.match.params.name)
     
    return(
        <div>
            <h3>Product</h3>
            <ul className="single-products-box">
                {products && products.map((item,i) =>{
                    return(
                    <li key={i}  className="product-card single"> 
                     {/* {item.images && item.images.map(pic =>{
                        return <img src={pic} alt="" className="image-box"/>
                    })} */}
                    
                    <img src={item.coverimage} alt="" className="image-box"/>
                    <div className="info">
                    <div className="product-name">{item.name}</div>
                    <div className="product-category">Category : {item.category}</div>
                    <div className="product-price">Price : {item.price} :-</div>
                    <div className="product-description">Description: {item.description}</div>
                    {/* <div className="product-images">Images: {item.images}</div> */}
                    <div className="qty">
                    <input  type="number" value={qty} onChange={handleChange}></input>
                       
                    
                    </div>
                    <button onClick={handleAddToCart} className="addToCart">Add to Cart</button>
                    </div>
                   
                    </li> 
                    )
                })}
            </ul>
            
        </div>
    )
}
export default SingleProduct;