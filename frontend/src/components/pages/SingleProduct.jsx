import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';

const SingleProduct = () =>{
    const {name} = useParams();
    const history = useHistory();
    const [qty, setQty] = useState(1);
    const[products,setProducts] = useState();

    useEffect(()=>{
        axios.get(`/api/products/singleproduct/${name}`)
        .then(res => setProducts(res.data))
        .catch(error => {console.log(error)})
    },[name])

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
            {products && products.map((item,i) =>{
                            return(
            <div className="middle-box" key={i} >
                <div className="left-box" style={{backgroundImage: `url(${item.coverimage})`}}></div>
                <div className="right-box">
                <div className="title-page">{item.name}</div>
                <div className="body-page">
                    <ul className="single-products-box">
                        
                            <li  className="single">     
                                <div className="profduct-info">
                                    <div className="product-category">Category : {item.category}</div>
                                    <div className="product-price price-box">Price : {item.price} :-</div>
                                    <div className="product-description">Description: {item.description}</div>
                                    {/* <div className="product-images">Images: {item.images}</div> */}
                                    <div className="qty">
                                    <input  type="number" value={qty} onChange={handleChange}></input>
                                    <button onClick={handleAddToCart} className="addToCart">Add to Cart</button>
                                    </div>
                                    
                                </div>
                        
                            </li> 
                           
                    </ul>
                    </div>
                </div>
            </div>
             )
            })}
            
        </div>
    )
}
export default SingleProduct;