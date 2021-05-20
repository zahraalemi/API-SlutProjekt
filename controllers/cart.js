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
    console.log(data)
    await productsInCart.doc().set(data)
    res.send(`added new product`)
    
    
    res.end()
} 

export const addQty = async (req, res) =>{
    const qty = await req.body
    productsInCart.update(qty)
    res.end()
}

export const removeFromCart = async (req,res) =>{
    /* const id = req.params.id
    const product = await productsInCart.get()
    product.forEach(item=>{
        const name = item.data().name
        if(id == name){
            const itemtodelete = item.data()
            console.log(itemtodelete.uid)
        }
    }) */
    productsInCart.get().then(function (querySnapshot){
        let removedProduct = ''
        querySnapshot.forEach(function (doc){
            const product = doc.data();
            product.id = doc.id
            removedProduct = doc.id
            console.log(doc.id)
            
        })
        return removedProduct
        
    })
    const producttoremove = await productsInCart.doc(removedProduct)
       await producttoremove.delete()

      

    
}