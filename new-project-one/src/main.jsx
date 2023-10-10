import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import Games from './component/Games/Games';
import Popularity from './component/Popularity/Popularity';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import Private from './component/Private/Private';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/games',
        element: <Private><Games></Games></Private>
      },
      
      {
        path:'/popularity',
        element:<Popularity></Popularity>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
    
     
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
