import React from 'react'
import banner from "../../public/Banner.jpg"
import Login from './Login'
function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
          <h1 className="text-4xl font-bold">Hello, Welcome to Devanshu's Library"<span className="text-pink-500"> Read, Learn, and Grow</span></h1>
         <p className="text-xl">
         "Reading is a passport to new adventures.
It's a key to unlocking knowledge, wisdom, and creativity.
Through books, we can travel to far-off lands, meet legendary heroes, and explore the unknown.
So come and explore our shelves, and discover the magic of reading.
Get ready to turn the page and start a new adventure!"
         </p>
        <br/>
        </div>
        {/* <button className="btn mt-6 btn-secondary">Get Started</button> */}
        <div className="">
    <a className="bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
    onClick={()=> document.getElementById("my_modal_3").showModal()}>
      Get Started
      </a>
      <Login/>

   </div>



        </div>
        <div className="order-1 w-full md:w-1/2">
        <img src={banner} className="w-92 h-92" alt="" />
        </div>
    </div>
    </>

  )
}

export default Banner
