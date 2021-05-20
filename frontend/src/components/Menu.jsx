import {Switch, Route} from 'react-router-dom';
import Product from './Products';
import ProductByCategory from './ProductByCategory';
import SingelProduct from './SingelProduct';
import SignUp from './member/Signup';
import ShoppingCart from './Shoppingcart';

const Menu = ()=>{
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Product}></Route>
                <Route exact path="/signup" component={SignUp}></Route>
                <Route exact path="/cart" component={ShoppingCart}></Route>
                <Route exact path="/:category" component={ProductByCategory}></Route>
                <Route exact path="/singelproduct/:name" component={SingelProduct}></Route>
                
            </Switch>
        </div>
    )
}
export default Menu