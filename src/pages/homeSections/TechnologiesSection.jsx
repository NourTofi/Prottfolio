import React from 'react'
import { FaAngular, FaBootstrap, FaCss3, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa'

const Technologies = () => {
  return (
    <div className='mt-20'>
        <h1 className='text-4xl text-blue-800 font-bold text-center my-10'>Technologies I USE</h1>
      <div className='grid md:grid-cols-1 grid-cols-4'>
        <FaReact size={180} color='cyan' className='w-full text-center mt-20 animate-bounce'/>
        <FaAngular size={180} color='red' className='w-full text-center mt-20'/>
        <FaJava size={180} color='orange' className='w-full text-center mt-20 animate-bounce'/>
        <FaNodeJs size={180} color='green' className='w-full text-center mt-20 '/>
        <FaBootstrap size={180} color='blue' className='w-full text-center mt-20 '/>
        <FaJsSquare size={180} color='green' className='w-full text-center mt-20 animate-bounce'/>
        <FaHtml5 size={180} color='orange' className='w-full text-center mt-20'/>
        <FaCss3 size={180} color='blue' className='w-full text-center mt-20 animate-bounce'/>
      </div>
    </div>
  )
}

export default Technologies
