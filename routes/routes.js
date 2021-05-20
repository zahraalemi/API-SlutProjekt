import express from 'express';
import {getProducts,getCategory,getProductById} from '../controllers/products.js'
const router = express.Router();
import {signUp} from '../controllers/member.js';
import {addToCart} from '../controllers/basket.js'

router.get("/", getProducts)
router.get("/:category", getCategory)
router.get("/singelproduct/:name", getProductById)
router.post("/signup", signUp)
router.post("/api/addtocart", addToCart)

export default router