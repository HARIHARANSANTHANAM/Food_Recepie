import {configureStore} from '@reduxjs/toolkit';
import foodReducer from '../features/Food/foodSlice';

export default configureStore({
    reducer:{
        food:foodReducer,
    }
})