import express from 'express';
import {getProducts,getCategory} from '../controllers/products.js'
const router = express.Router();

router.get("/", getProducts)
router.get("/:category", getCategory)

export default router