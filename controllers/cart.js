import firebase from '../firebase/db.js';
const firestore = firebase.firestore();
const productsInCart = await firestore.collection('cart');

export const getCartProducts = async (req, res) =>{
    const cartProducts = await productsInCart.get()
    const productsArray = [];
    cartProducts.forEach(item => {
        
            const productName = item.data().name;
            const productPrice = item.data().price;
            const productImage = item.data().coverimage;
            const productQty = item.data().productQty
        productsArray.push({
            name: productName,
            
            price : productPrice,
           
            coverimage : productImage,
            productQty: productQty
       
        })
        
        
    })
    res.send(productsArray)
}

export const addProductsToCart = async (req,res) =>{
    let data = req.body;
    await productsInCart.doc().set(data)
    res.send(`added new product`)
    
    
    res.end()
} 

export const changeQty = async (req, res) =>{ 
    let data = await req.body.productQty
    let productid = req.params.name;

    let qtyProduct = '' 
    await productsInCart.get().then(function (querySnapshot){
        
        querySnapshot.forEach(function (doc){
            const product = doc.data();
            product.id = doc.id
            if(productid === product.name){
                qtyProduct = doc.id 
            }
            return qtyProduct
            
        })
    })
    
    await productsInCart.doc(qtyProduct).update({
        "productQty": data
    })   
}

export const removeFromCart = async (req,res) =>{
    let productid = req.params.id;

    let removedProduct = '' 
    productsInCart.get().then(function (querySnapshot){
        
        querySnapshot.forEach(function (doc){
            const product = doc.data();
            product.id = doc.id
            
            if(productid === product.name){
                removedProduct = doc.id
                
            }
            return removedProduct
            
            
            
        })
        
        
    }).then(() => removeproduct())
    
    const removeproduct = async (req,res) =>{
        const producttoremove = await productsInCart.doc(removedProduct)
        
         await producttoremove.delete()
    }

      

    
}
