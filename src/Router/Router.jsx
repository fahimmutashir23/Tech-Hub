import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/About/Gallery";


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
        ]
    }
])


export default Router;