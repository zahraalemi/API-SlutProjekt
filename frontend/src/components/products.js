import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/* export const getProducts = createAsyncThunk ("products/getProducts" , async () =>{
    return axios.get("/api/products")
    .then(res => res.json());
}); */

const webShopSlice = createSlice({
    name : "webShop",
    initialState:{
        products :[]
    },
    reducers: {
        setProducts :(state,action) =>{
            state.Products =action.payload
            console.log(state.products)
        }
    },
    /* extraReducers:{
        [getProducts.pending]: (state) => {
            state.status ="loading..."
            console.log(state.status);
        },
        [getProducts.fulfilled] : (state,action) => {
            state.status = "success";
            state.products = action.payload
            console.log(state.products)  
        },
        [getProducts.rejected]:(state) => {
            state.status ="rejected";
            console.log(state.status);
        }

    } */
})
const { reducer, actions } = webShopSlice;
export const {setProducts} = actions
export default reducer;
