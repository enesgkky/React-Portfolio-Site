import React from 'react'
// import Header from './Header/Header'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

const Blog = () => {
  return (
    <div className='relative w-full h-screen flex justify-center items-center bg-gray-950'>
      {/* <Header/>
      Blog */}
      <h1 className='text-yellow-300 font-extrabold text-3xl md:text-5xl uppercase mx-auto animate-bounce'>Coming soon!</h1>
      <a href='/' className='text-yellow-300 border border-yellow-300 font-semibold text-sm rounded absolute bottom-48 w-36 py-2 mx-auto text-center flex justify-center items-center gap-2 animate-pulse'><BsFillArrowLeftSquareFill /> Go Back!</a>
    </div>
  )
}

export default Blog