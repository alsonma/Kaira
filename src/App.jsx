import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NewCollections from './components/NewCollections/NewCollections'
import Features from './components/Features/Features'
import NewArrival from './components/NewArrivals/NewArrivals'
import Collection from './components/Collection/Collection'
import Testimonials from './components/Testimonials/Testimonials'
import Newsletter from './components/Newsletter/Newsletter'
import InstagramGallery from './components/InstagramGallery/InstagramGallery'
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import Men from './pages/Men/Men'
import Women from './pages/Women/Women'
import Contact from './pages/Contact/Contact'
import Products from './pages/Products/Products'
import About from './pages/About/About'
import Accessories from './pages/Accessories/Accessories'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import NewCollection from './pages/NewCollections/NewCollections'
export default function () {
  return (
    <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route
          path="/"
          element={
            <>
    <NewCollections />
    <Features />
    <NewArrival />
    <Collection />
    <Testimonials />
    <Newsletter />
    <InstagramGallery />
    </>
          }
          />
          <Route path="/" />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newcollection" element={<NewCollection />} />
   </Routes>
   <Footer />
    </BrowserRouter>
    </div>
  )
}
