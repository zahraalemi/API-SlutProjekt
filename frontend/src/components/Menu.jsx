import {Switch, Route} from 'react-router-dom';
import Product from './Products';
import ProductByCategory from './ProductByCategory';
import SingleProduct from './SingleProduct';
import SignUp from './member/Signup';
import ShoppingCart from './Shoppingcart';

const Menu = ()=>{
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Product}></Route>
                <Route exact path="/signup" component={SignUp}></Route>
                <Route exact path="/cart" component={ShoppingCart}></Route>
                <Route exact path="/singleproduct/:name" component={SingleProduct}></Route>
                <Route exact path="/:category" component={ProductByCategory}></Route>
            </Switch>
        </div>
    )
}
export default Menu