
import { setProducts } from './components/products';
import { useEffect } from 'react';
import{ useDispatch } from 'react-redux'
import Menu from './components/pages/Menu';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import './App.css';
import axios from 'axios';

function App() {

 /*  const dispatch = useDispatch();
  useEffect(()=>{
    axios.get(`/api/products/`)
    .then(res => dispatch(setProducts(res.data)))
    
},[dispatch]) */

  return (
    <div className="App">
        <Header />
        <Menu />
        <Footer />
      
    </div>
  );
}

export default App;
