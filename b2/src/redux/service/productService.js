import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk(
    'product/showProduct',
    async () => {
        const res   = await axios.get('http://localhost:3000/products');
        return res.data;
    }
)

export const add = createAsyncThunk(
    'product/add',
    async (newProduct) => {
        return await axios.post("http://localhost:3000/products", newProduct);
    }
)

export const edit = createAsyncThunk(
    'product/edit',
    async ({ id, updatedProduct }) => {
        try {
            const response = await axios.put(`http://localhost:3000/products/${id}`, updatedProduct);

            return {
                data: response.data,
            };
        } catch (error) {
            throw error;
        }
    }
)

export const deleted = createAsyncThunk(
    'product/delete',
    async (id) => {
        try {
            await axios.delete(`http://localhost:3000/products/${id}`);
            return id;
        } catch (error) {
            throw error;
        }
    }
);