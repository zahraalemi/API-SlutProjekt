import express from 'express';
import {getProducts,getCategory, getOneProduct} from '../controllers/products.js'
const router = express.Router();
import {signUp} from '../controllers/member.js';
import { addProductsToCart, addQty, getCartProducts, removeFromCart } from '../controllers/cart.js';

router.get("/", getProducts)
router.get("/singleproduct/:name", getOneProduct)
router.get("/cart", getCartProducts)
router.post("/addtocart", addProductsToCart)
router.patch("/addqty", addQty)
router.get("/:category", getCategory)
router.delete("/remove/:id", removeFromCart)

router.post("/signup", signUp)


export default router