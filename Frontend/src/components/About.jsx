import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <>
    <Navbar/>
    <div id="about" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 py-5 ">
        <h2 className="text-3xl font-bold mb-4">About Devanshu's Library</h2>
        <p className="text-lg mb-8">Welcome to Devanshu's Library, your premier destination for books, knowledge, and imagination. Our library is dedicated to providing a comfortable and inclusive space for readers of all ages and backgrounds.</p>
        <div className="flex flex-wrap mb-8">
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-lg">Our mission is to foster a love of reading, learning, and exploration in our community. We strive to provide access to a diverse range of books, resources, and programs that promote literacy, education, and personal growth.</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-lg">Our vision is to create a vibrant and inclusive community of readers, learners, and explorers. We aim to provide a welcoming and supportive environment that encourages people to discover new ideas, perspectives, and passions.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
