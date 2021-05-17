import firebase from '../firebase/db.js';
const firestore = firebase.firestore();
const products = await firestore.collection('products');

export const getProducts = async (req,res)=>{
    const product = await products.get();
    const productsArray = [];
    product.forEach(item =>{
        const productName = item.data().name;
        const productCategory = item.data().category;
        const productPrice = item.data().price;
        const productImage = item.data().image;
        const productDescription = item.data().description;
        const productCoverImage = item.data().coverImage;
        productsArray.push({
            name: productName,
            category : productCategory,
            price : productPrice,
            description: productDescription,
            images : productImage,
            coverimage : productCoverImage
        })
    })
    res.send(productsArray)
}
export const getCategory = async (req,res)=>{
    const product = await products.get();
    const productsArray = [];
    product.forEach(item => {
        if(req.params.category ==item.data().category){
            const productName = item.data().name;
            const productCategory = item.data().category;
            const productPrice = item.data().price;
            const productImage = item.data().image;
            const productCoverImage = item.data().coverImage;
            const productDescription = item.data().description;
        productsArray.push({
            name: productName,
            category : productCategory,
            price : productPrice,
            description: productDescription,
            images : productImage,
            coverimage : productCoverImage
        })
        }
        
    })
    res.send(productsArray)
}

