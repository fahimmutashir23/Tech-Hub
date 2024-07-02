import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/About/Gallery";
import Products from "../Pages/Products/Products";
import DetailsProduct from "../Pages/Products/DetailsProduct";
import Contect from "../Pages/ContectUs/Contect";
import HotProducts from './../Pages/Products/HotProducts';
import Event from "../Pages/About/Event";
import DashboardLayout from "../Layouts/DashboardLayout";
import AdminHome from "../Pages/AdminPages/AdminHome/AdminHome";
import ProductList from "../Pages/AdminPages/ProductList/ProductList";
import CategoryList from "../Pages/AdminPages/Category/CategoryList";
import BookingsList from "../Pages/AdminPages/Bookings/BookingsList";
import AdminLogin from "../Pages/AdminPages/AdminAuth/AdminLogin";
import AdminRegistration from "../Pages/AdminPages/AdminAuth/AdminRegistration";
import CheckLogin from "../Security/CheckLogin";
import OrderPage from "../Pages/OrderPage/OrderPage";
import ErrorPage from "../Utils/ErrorPage";
import Invoice from "../Pages/AdminPages/Invoice/Invoice";
import CheckNotLogin from "../Security/CheckNotLogin";
import Profile from "../Pages/AdminPages/Profile/Profile";
import Contact from "../Pages/AdminPages/Contact/Contact";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
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
            },
            {
                path: '/hotProduct',
                element : <HotProducts/>,
            },
            {
                path: '/orderPage',
                element : <OrderPage/>,
            },
            {
                path: '/invoice',
                element : <Invoice/>,
            },
        ]
    },
    {
        path: '/admin',
        element: <CheckLogin><DashboardLayout /></CheckLogin>,
        children: [
            {
                path: '/admin',
                element: <AdminHome />
            },
            {
                path: '/admin/productList',
                element: <ProductList />
            },
            {
                path: '/admin/categoryList',
                element: <CategoryList />
            },
            {
                path: '/admin/bookingsList',
                element: <BookingsList />
            },
            {
                path: '/admin/bookingsList',
                element: <BookingsList />
            },
            {
                path: '/admin/profile',
                element: <Profile />
            },
            {
                path: '/admin/contact',
                element: <Contact />
            },
        ]
    },
    {
        path: '/admin/login',
        element: <CheckNotLogin><AdminLogin /></CheckNotLogin>
    },
    {
        path: '/admin/register',
        element: <AdminRegistration />
    },
])


export default Router;