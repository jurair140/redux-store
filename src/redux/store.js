import { configureStore } from "@reduxjs/toolkit";
import prodectSlice from "./slice/prodectSlice";
import wishSlice from "./slice/wishSlice";
import cartSlice from "./slice/cartSlice";

const productStore=configureStore({
    reducer:{
        productReducer:prodectSlice,
        wishReducer:wishSlice,
        cartReducer:cartSlice,

    }
})

export default productStore