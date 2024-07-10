import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Jobs from "./Jobs.jsx";
import CreateJob from "./CreateJob.jsx";
import UpdateJob from "./UpdateJob.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Admin() {
  return (
    <>
      <Navbar />
      <Jobs/>
    </>
  );
}