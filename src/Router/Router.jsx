import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/About/Gallery";
import Products from "../Pages/Products/Products";
import DetailsProduct from "../Pages/Products/DetailsProduct";
import Contect from "../Pages/ContectUs/Contect";


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
        ]
    }
])


export default Router;