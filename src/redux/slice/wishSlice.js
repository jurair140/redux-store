import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:{
        wishlist:[]
    },

    reducers:{
        addToWishlist(state,action){
            const existing = state.wishlist.find(item=>item.id==action.payload.id)
            if(existing){
                alert("product already exist in wishlist")
            }
            else{
            state.wishlist.push(action.payload)
            alert("product added successfully")
        }
    },

    removeFromWishlist(state,action){
        state.wishlist=state.wishlist.filter(item=>item.id!=action.payload.id)
        alert("product removed successfully")
    }
}
})

export default  wishlistSlice.reducer;
export const  {addToWishlist,removeFromWishlist}=wishlistSlice.actions;

