import React from 'react'

function About() {
  return (
    <div className='text-white bg-black min-h-screen px-6 py-16'>
      <div className='max-w-5xl mx-auto text-center'>
        <h1 className='text-4xl font-bold mb-8'>About This Blog.</h1>
        <p className='text-gray-400 mb-6'>Example Blog is a demo blog website created to practice and understand modern web development using React.</p>
        <p className='text-gray-400 mb-6'>This project focuses on learning key concepts like component-based  architecture, React Router for navigation, and Tailwind CSS for styling.</p>
        <p className='text-gray-400'>The goal of this blog is purely educational and it helps beginners understand how a simple blog application works in React.</p>
      </div>
    </div>
  )
}

export default About