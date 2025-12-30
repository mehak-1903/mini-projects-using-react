import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {
  const getPostLink  = (id) => `/post/${id}`;
  return (
    <div className='text-white'>

      {/* Hero Section */}
      <section className='bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 bg-gray-800 py-16 text-center'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to Example Blog.</h1>
        <p className='text-gray-300 max-w-xl mx-auto'>This is an example blog website created for learning React and React Router.</p>
      </section>

      {/* Latest Posts */}
      <section className='py-12 bg-black'>
        <h2 className='text-2xl font-semibold text-center mb-8'>Latest Posts.</h2>

        <div className='grid md:grid-cols-3 gap-6 px-6'>
          <div className='bg-gray-800 p-5 rounded hover:scale-[1.02] hover:shadow-xl transition-all duration-500'>
            <h3 className='text-xl font-semibold mb-3'>First Blog Post</h3>
            <p className='text-gray-400 mb-3'>This is a short description of the blog post.</p>
            <Link to={getPostLink(1)} className="text-orange-500 hover:underline">Read More→</Link>
          </div>

          <div className='bg-gray-800 p-5 rounded hover:scale-[1.02] hover:shadow-xl transition-all duration-500'>
            <h3 className='text-xl font-semibold mb-3'>Another Blog Post</h3>
            <p className='text-gray-400 mb-3'>Another example blog post description.</p>
            <Link to={getPostLink(2)} className='text-orange-500 hover:underline'>Read More→</Link>
          </div>

          <div className='bg-gray-800 p-5 rounded hover:scale-[1.02] hover:shadow-xl transition-all duration-500'>
            <h3 className='text-xl font-semibold mb-3'>Third Blog Post</h3>
            <p className='text-gray-400 mb-3'>Learn how to build pages using React.</p>
            <Link to={getPostLink(3)} className='text-orange-500 hover:underline'>Read More→</Link>
          </div>

          <div className='bg-gray-800 p-5 rounded hover:scale-[1.02] hover:shadow-xl transition-all duration-500'>
            <h3 className='text-white text-xl font-semibold'>Fourth Blog Post</h3>
            <p className='text-gray-400 mb-3'>Learn the basics of React Router.</p>
            <Link to={getPostLink(4)} className='text-orange-500 hover:underline'>Read More→</Link>
          </div>

          <div className='bg-gray-800 p-5 rounded hover:scale-[1.02] hover:shadow-xl transition-all duration-500'>
            <h3 className='text-xl font-semibold'>Fifth Blog Post</h3>
            <p className='text-gray-400 mb-3'>Learning the concept of Hook.</p>
            <Link to={getPostLink(5)} className='text-orange-500 hover:underline'>Read More→</Link>
          </div>

          <div className='bg-gray-800 p-5 rounded hover:scale-[1.02] hover:shadow-xl transition-all duration-500'>
            <h3 className='text-xl font-semibold'>Sixth Blog Post</h3>
            <p className='text-gray-400 mb-3'>Learn how to styling React Apps with Tailwind CSS.</p>
            <Link to={getPostLink(6)} className='text-orange-500 hover:underline'>Read More→</Link>
          </div>
        </div>

      </section>

      {/* About */}
      <section className='bg-gray-800 py-16 text-center px-6'>
        <h2 className='text-white text-3xl font-semibold mb-4'>About This Blog</h2>
        <p className='text-gray-300 max-w-2xl mx-auto'>Example Blog is a demo project built to practice React, Tailwind CSS, and React Router.</p>
      </section>
    </div>
  )
}

export default Home