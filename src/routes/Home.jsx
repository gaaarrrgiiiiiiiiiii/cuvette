import Navbar from "../components/Navbar.jsx"
import Sidebar from "../components/Sidebar.jsx"
import { useLocation, useNavigate } from "react-router-dom"
export default function home(){
  const location = useLocation()
  return(
    <>
    
    <Navbar/>
    <Sidebar />
    
    </>
    
  )
}