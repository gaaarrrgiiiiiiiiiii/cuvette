import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom" 
import Home from "./routes/Home.jsx"
import Login from "./routes/Login.jsx"
import Admin from "./routes/Admin.jsx"
import Signup from "./routes/Signup.jsx"
import Jobs from "./routes/Jobs.jsx";
import CreateJob from "./routes/CreateJob.jsx";
import UpdateJob from "./routes/UpdateJob.jsx";

const Router= createBrowserRouter([
  {path:"/Home",element:<Home/>},
  {path:"/",element:<App/>},
  {path:"/Login",element:<Login/>},
  {path:"/Admin",element:<Admin/>},
  {path:"/Signup",element:<Signup/>},
  {path:"/Jobs",element:<Jobs/>},
  {path:"/CreateJob",element:<CreateJob/>},
  {path:"/UpdateJob",element:<UpdateJob/>}

  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>,
)
