import { createSlice } from "@reduxjs/toolkit";

const moviesslice =createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:[],
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
    },
})
export const {addNowPlayingMovies}=moviesslice.actions
export default moviesslice.reducer;