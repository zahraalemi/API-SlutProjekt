import Slide from '../productsimages/Hero-2.jpg'

const Header = () =>{
 return( 
    <div className="container">
        <div className="topbar">
            <div className="left-box">
                <div className="menu">menu</div>
            </div>
            <div className="right-box">
                <div className="member">login</div>
                <div className="basket">basket</div>
            </div>
        </div>
        <div className="logobar">
            <div className="logo-box">logo</div>
            <div className="search-box">search</div>
            <div className="category-box">category</div>
        </div>
        <div className="slidebar">
            <img src={Slide} alt="" width="100%"/>
        </div>
    </div>
 )
}

export default Header