import firebase from '../firebase/db.js';
const firestore = firebase.firestore();
const products = await firestore.collection('cart');


export const addToCart = async (req,res) =>{
    const product = await req.body
    products.push(product);
    res.end();
    console.log(product)
}