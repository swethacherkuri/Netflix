import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import Header from "./header";
import { useDispatch  } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesslice";


const Browser =()=>{
    const dispatch=useDispatch();
    const NowplayingMovies=async () =>{
        const data =await  fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options)
        const json =await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
        
    }
    useEffect(()=>{
        NowplayingMovies();
        
    },[]);
    return(
    <div>
        
        <Header/>
    </div>
    )


}
export default Browser;