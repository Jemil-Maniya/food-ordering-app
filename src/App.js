import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"
import Header from "../src/components/Header"
import Body from "./components/Body";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
// import Grocery from "./components/Grocery";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Cart";




const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(()=> import("./components/About") );;

const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
            <Header/>
            <Outlet />
        </div>
        </Provider>
        
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading..</h1>}> <About /> </Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading..</h1>}> <Grocery /> </Suspense>
            },
            {
                path: "restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ]
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <RouterProvider router={appRouter} />);

