import React from 'react'
import Home from './Home/Home';
import { Route, Routes } from "react-router-dom";
import Book from './books/Book';
import Signup from './components/Signup';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <>
       <div className="dark:bg-slate-900 dark:text-white">
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/books" element={<Book/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/about" element={<About/>}/>
       </Routes>
       </div>
    </>
  )
}

export default App




