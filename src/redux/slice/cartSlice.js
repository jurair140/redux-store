import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart: [],
    },

    reducers:{
        addToCart(state,action){
            const existing = state.cart.find(item=>item.id==action.payload.id)
            if(existing){
                existing.quantity+=1
                alert("product added successfully to cart")
            }
            else{
                let prod=action.payload
                prod={...prod,quantity:1}
                state.cart.push(prod)
            
            alert("product added successfully to cart")
        }
        },


        removeFromCart(state,action){
            state.cart=state.cart.filter(item=>item.id!=action.payload)
            alert("product removed successfully")
        },
        increase(state,action){
            const existing = state.cart.find(item=>item.id==action.payload)
            existing.quantity++
        },
        decrease(state,action){
            const existing = state.cart.find(item=>item.id==action.payload)
            if(existing.quantity==1){
                state.cart=state.cart.filter(item=>item.id!=action.payload)
                alert("product removed successfully")

            }
            else{
            existing.quantity--
        }
            
        },
        checkout(state){
            state.cart=[]
        }
    }
})

export default cartSlice.reducer
export const  {addToCart,removeFromCart,increase,decrease,checkout}=cartSlice.actions;