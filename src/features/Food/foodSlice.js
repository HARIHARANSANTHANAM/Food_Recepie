import { createSlice } from '@reduxjs/toolkit';

export const foodSlice = createSlice({
  name: 'food',
  initialState: {
    value: [],
  },
  reducers: {
    AddtoCart:(state,action)=>{
        const payload=action.payload;
        return {...state,value:[...state.value,payload]}
    }
  },
});

export const { AddtoCart} = foodSlice.actions;

export const selectfood = state => state.food.value;

export default foodSlice.reducer;
