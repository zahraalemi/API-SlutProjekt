import {Switch, Route} from 'react-router-dom';
import Product from './Products';
import ProductByCategory from './ProductByCategory';
import SingleProduct from './SingleProduct';
import ShoppingCart from './Shoppingcart';
import SignUp from '../member/Signup';
import Profile from '../member/Profile';
import Login from '../member/Login';
import { AnimatePresence } from "framer-motion";

const Menu = ()=>{
    return(
        <div>
            <AnimatePresence>
                <Switch>
                    <Route exact path="/" component={Product}></Route>
                    <Route exact path="/signup" component={SignUp}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/profile/:userId" component={Profile}></Route>
                    <Route exact path="/cart" component={ShoppingCart}></Route>
                    <Route exact path="/singleproduct/:name" component={SingleProduct}></Route>
                    <Route exact path="/:category" component={ProductByCategory}></Route>
                </Switch>
            </AnimatePresence>    
        </div>
    )
}
export default Menu