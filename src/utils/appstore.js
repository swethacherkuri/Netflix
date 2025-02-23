import { configureStore } from "@reduxjs/toolkit";
import moviesreducer from"./moviesslice"

const appstore=configureStore({
    reducer:{
        movies:moviesreducer,
    }
})
export default appstore;