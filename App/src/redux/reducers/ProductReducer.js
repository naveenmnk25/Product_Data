
import { createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from '../actions/ProductAction';

const initialState = {
  productList: null,
  product: null,
  productGrid: [
    {count:1,grid:[12]},
    {count:2,grid:[6,6]},
    {count:3,grid:[4,4,4]},
    {count:4,grid:[3,3,3,3]},
    {count:5,grid:[3,3,2,2,2]},
    {count:6,grid:[1,1,1,1,1,1]},
  ],
  status: 'idle',
  error: null
};

const productSlice = createSlice({
  name: 'product',
  initialState, 
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading'; 
        state.productList=null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.productList = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.productList=null;
      })

      // .addCase(fetchProductByIdEmail.pending, (state) => {
      //   state.status = 'loading'; 
      //   state.product=null;
      // })
      // .addCase(fetchProductByIdEmail.fulfilled, (state, action) => {
      //   state.status = 'succeeded';
      //   state.product = action.payload;
      // })
      // .addCase(fetchProductByIdEmail.rejected, (state, action) => {
      //   state.status = 'failed';
      //   state.error = action.error.message;
      //   state.product=null;
      // })

      // // Add Product Value
      // .addCase(addProduct.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(addProduct.fulfilled, (state, action) => {
      //   state.status = 'succeeded';
      //   state.productList = [...state.productList, action.payload];
      // })
      // .addCase(addProduct.rejected, (state, action) => {
      //   state.status = 'failed';
      //   state.error = action.error.message;
      // })

      // // Update Product Value
      // .addCase(updateProduct.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(updateProduct.fulfilled, (state, action) => {
      //   state.status = 'succeeded';
      //   const index = state.productList.findIndex(el => el.productId === action.payload.productId);
      //   if (index !== -1) {
      //     state.productList[index] = action.payload;
      //   }
      // })
      // .addCase(updateProduct.rejected, (state, action) => {
      //   state.status = 'failed';
      //   state.error = action.error.message;
      // })

      // // Delete Product Value
      // .addCase(deleteProduct.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(deleteProduct.fulfilled, (state, action) => {
      //   state.status = 'succeeded';
      //   state.cssClasss.data = state.cssClasss.data.filter(el => el.productId !== action.meta.arg);
      // })
      // .addCase(deleteProduct.rejected, (state, action) => {
      //   state.status = 'failed';
      //   state.error = action.error.message;
      // });
  },
});

export default productSlice.reducer;