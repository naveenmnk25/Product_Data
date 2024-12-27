import {  createAsyncThunk } from '@reduxjs/toolkit';
import { BASEURL } from '../../api/Api';


const BASE_URL = BASEURL + 'data.json';
// Async thunk to fetch products
export const fetchProduct = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data; // Return the JSON data
  }
);

// export const fetchProductByIdEmail = createAsyncThunk(
//   'product/fetchProductByIdEmail',
//   async (mail) => {
//     const response = await baseapi.get('/Product/'+mail);
//     return response.data;
//   }
// );

// export const addProduct = createAsyncThunk(
//   'product/addproduct',
//   async (data) => {
//     const response = await baseapi.post('Product', data);
//     return response?.data;
//   }
// );

// export const updateProduct = createAsyncThunk(
//   'product/updateproduct',
//   async (userData) => {
//     try {
//       const response = await baseapi.put(`Product/${userData.productId}`, userData);
//       return response.data;
//     } catch (error) {     
     
//       throw new Error('Failed to update product');
//     }
//   }
// );

// export const deleteProduct = createAsyncThunk(
//   'product/deleteProduct',
//   async (userId) => {
//     try {
//       await baseapi.delete(`Product/${userId}`);
//       return userId;
//     } catch (error) {     
//       console.log(error);
//       throw new Error('Failed to update product: ' + error.response.data);
//     }
//   }
// );