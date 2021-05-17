import {Switch, Route} from 'react-router-dom';
import Product from './Products';
import Skateboard from './categorys/Skateboard';
import Hoodie from './categorys/Hoodie';
import Caps from './categorys/Caps';
import Tshirt from './categorys/T-shirt';
import SingelProduct from './categorys/Singleproduct';

const Menu = ()=>{
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Product}></Route>
                <Route path="/skateboard" component={Skateboard}></Route>
                <Route path="/hoodie" component={Hoodie}></Route>
                <Route path="/t-shirt" component={Tshirt}></Route>
                <Route path="/caps" component={Caps}></Route>
                <Route path="/all" component={SingelProduct}></Route>
            </Switch>
        </div>
    )
}
export default Menu