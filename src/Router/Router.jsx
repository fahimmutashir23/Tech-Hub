import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/About/Gallery";
import Products from "../Pages/Products/Products";
import DetailsProduct from "../Pages/Products/DetailsProduct";
import Contect from "../Pages/ContectUs/Contect";
import HotProducts from './../Pages/Products/HotProducts';
import Event from "../Pages/About/Event";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children : [
            {
                path: '/',
                element : <Home />
            },
            {
                path: '/gallery',
                element : <Gallery />
            },
            {
                path: '/events',
                element : <Event/>
            },
            {
                path: '/contact',
                element : <Contect />
            },
            {
                path: '/products',
                element : <Products/>
            },
            {
                path: '/products/:id',
                element : <DetailsProduct/>,
                loader: ({params})=>fetch(`http://localhost:5173/products/${params.id}`)
            },
            {
                path: '/hotProduct',
                element : <HotProducts/>,
           
            },
        ]
    }
])


export default Router;