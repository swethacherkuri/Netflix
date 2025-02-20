import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browser from "./browser";
import Login from "./login";

const Body =()=>{
    const approuter = createBrowserRouter([
       
       
       {
             path:"/",
             element:<Login/>
             },
             {
                path:"/browser",
                element:<Browser/>
                },
    ])
    return(
        <div>
       <RouterProvider router={approuter}/>
        </div>
    );


};
export default Body;