import App from "./App"
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./Pages/Home"
import Campaign from "./Pages/Campaign"
import AboutUS from "./Pages/AboutUS"
import Souls from "./Pages/Souls"
import HelpAge from './Pages/HelpAge'
import Malala from './Pages/Malala'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

import Contact from "./Pages/Contact"
const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/" element={<Home />} />
      <Route path="camp" element={<Campaign />} />
      <Route path="about" element={<AboutUS />} />
      <Route path="cont" element={<Contact />} />
      <Route path="char1" element={<Souls />} />
      <Route path="char2" element={<Malala />} />
      <Route path="char3" element={<HelpAge />} />
     
     
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />

 
</React.StrictMode>,
)
