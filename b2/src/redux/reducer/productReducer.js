import {createSlice} from "@reduxjs/toolkit";
import {add, deleted, edit, getAll} from "../service/productService";

const initialState = {
    listProduct: []
}

const productReducer = createSlice({
    name:"products",
    initialState,
    extraReducers:builder => {
        builder.addCase(getAll.fulfilled,(state,{payload})=>{
            state.listProduct = payload;
        })
        builder.addCase(add.fulfilled, (state, {payload}) => {
            state.listProduct.push(payload);
        })
        builder.addCase(edit.fulfilled, (state, { payload }) => {
            const editedProductIndex = state.list.findIndex(product => product.id === payload.data.id);
            if (editedProductIndex !== -1) {
                state.list[editedProductIndex] = payload.data;
            }
        })
        builder.addCase(deleted.fulfilled, (state, { payload }) => {
            const removedProductIndex = state.list.findIndex(product => product.id === payload);
            if (removedProductIndex !== -1) {
                state.listProduct.splice(removedProductIndex, 1);
            }
        });
    }
})
export default productReducer.reducer;