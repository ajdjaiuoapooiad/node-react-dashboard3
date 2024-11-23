import { lazy } from "react";   
import Category from "../../views/admin/Category";
import Sellers from "../../views/admin/Sellers";
const Orders = lazy(() => import("../../views/admin/Order")); 
const AdminDashboard = lazy(()=> import('../../views/admin/AdminDashboard'))   




export const adminRoutes = [
    {
        path: 'admin/dashboard',
        element : <AdminDashboard/>,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/orders',
        element : <Orders/> ,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/category',
        element : <Category /> ,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/sellers',
        element : <Sellers/> ,
        role : 'admin'
    }

]