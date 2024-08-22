import {Outlet, useRoutes } from "react-router-dom" 
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { Children } from "react";
import Mynavbar from "../components/Mynavbar";


import MyAccount from "../pages/MyAccount";
import { Notification } from "../pages/Notification";
import Cart from "../pages/Cart";
import { MenSection} from "../pages/MensSection";
import { Her } from "../pages/Her";
import { ElectronicCompi } from "../components/EelectronicCompi";
import Footer from "../components/Footer";



let allpages ={
    path:'/',
    element:<><Mynavbar/><Outlet/><Footer/></>,
    children:[{
        path:'home',
        element:<Home/>

    },
    {
        path:'login',
        element:<Login/>

    },
    {
        path:'profile',
        element:<Profile/>

    },
    {
        path:'myaccount',
        element:<MyAccount/>

    },
    {
        path:'cart',
        element:<Cart/>

    },
    {
        path:'notification',
        element:<Notification/>

    },
    {
        path:'mens',
        element:<MenSection/>

    },
    {
        path:'She/her',
        element:<Her/>

    },
    {
        path:'electronics',
        element:<ElectronicCompi/>

    }



    


]


};

function Allroutes(){
    return useRoutes([allpages])
}
export default Allroutes;