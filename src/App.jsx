import React from 'react'
import './App.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import { Navbar,Contact,Home,About,Testimonials,Portfolio,Services,Footer } from './Container';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
     </Route>
    )
  )
  return(
    <div className='background'>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App

