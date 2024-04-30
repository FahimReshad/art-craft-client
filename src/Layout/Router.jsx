import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Pages/Home";
import AllArtCraft from "../Pages/AllArtCraft";
import AddCraftItem from "../Pages/AddCraftItem";
import MyArtCraft from "../Pages/MyArtCraft";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpdatePage from "../Pages/UpdatePage";
import ViewDetails from "../Pages/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import SeeArtCraft from "../Pages/SeeArtCraft";
import ErrorePage from "../Pages/ErrorePage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorePage></ErrorePage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/craft')
        },
        {
            path: '/allArtCraftItems',
            element: <AllArtCraft></AllArtCraft>,
            loader: () => fetch('http://localhost:5000/craft')
        }, 
        {
            path: '/addCraftIteM',
            element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
        },
        {
            path: '/myArtCraft',
            element: <PrivateRoute><MyArtCraft></MyArtCraft></PrivateRoute>
            
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }, 
        {
            path: '/updatePage/:id',
            element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/craft/${params.id}`)
        },
        {
            path: '/viewDetails/:id',
            element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/craft/${params.id}`)
        },
        {
            path: '/see/:id',
            element: <PrivateRoute><SeeArtCraft></SeeArtCraft></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/artCraft/${params.id}`)
        }
      ]
    },
  ]);

