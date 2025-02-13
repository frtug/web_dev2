import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../feature/counter/counter.slice'


export const store = configureStore({
    reducer:{
        counter:CounterReducer
    }
})