
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Card } from '@mui/material'
//import Cards from './Components/Cards'
import AboutUS from './Pages/AboutUS'
import Campaign from './Pages/Campaign'
import * as ReactDOM from "react-dom/client";
import Front from './Components/Front'
import Souls from './Pages/Souls'
import HelpAge from './Pages/HelpAge'
import Malala from './Pages/Malala'
// import {BrowserRouter as Router , Route , Switch, Outlet} from 'react-router-dom'
import Home from './Pages/Home'


function App() {
  

  return (
    <>
    <div className="complete">
   
    <Navbar />
    <Outlet />
    <Footer />

      </div>
     
    </>
  )
}

export default App
