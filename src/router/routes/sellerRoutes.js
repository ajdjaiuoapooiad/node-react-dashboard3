import { lazy } from "react";  
import SellerDashboard from "../../views/seller/SellerDashboard";
const Home = lazy(()=> import('../../views/Home'))   
export const sellerRoutes = [
    {
        path: '/',
        element : <Home/>,
        ability : ['admin','seller']
    },
    {
        path: '/seller/dashboard',
        element : <SellerDashboard/>,
        ability : ['seller']
    }
]