import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Pages/Home";
import AllArtCraft from "../Pages/AllArtCraft";
import AddCraftItem from "../Pages/AddCraftItem";
import MyArtCraft from "../Pages/MyArtCraft";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/craft')
        },
        {
            path: '/allArtCraftItems',
            element: <AllArtCraft></AllArtCraft>
        }, 
        {
            path: '/addCraftIteM',
            element: <AddCraftItem></AddCraftItem>
        },
        {
            path: '/myArtCraft',
            element: <MyArtCraft></MyArtCraft>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);

