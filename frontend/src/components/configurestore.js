import { configureStore } from '@reduxjs/toolkit';
import products from './products';

const store = configureStore({
    reducer:{
        webShop : products
    },

});

export default store;