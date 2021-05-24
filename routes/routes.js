import express from 'express';
import {getProducts,getCategory, getOneProduct} from '../controllers/products.js'
const router = express.Router();
import {signUp, login, userDetails, addUserDetails} from '../controllers/member.js';
import { addProductsToCart, addQty, getCartProducts, removeFromCart } from '../controllers/cart.js';

router.get("/", getProducts)
router.get("/singleproduct/:name", getOneProduct)
router.get("/cart", getCartProducts)
router.post("/addtocart", addProductsToCart)
router.patch("/addqty", addQty)
router.get("/:category", getCategory)
router.delete("/remove/:id", removeFromCart)

router.post("/signup", signUp)
router.post("/login", login)
router.patch("/profile/addDetails", addUserDetails)
router.get("/profile/:userId", userDetails)


export default router