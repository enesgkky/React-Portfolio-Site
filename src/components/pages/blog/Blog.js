import React from 'react'
// import Header from './Header/Header'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

const Blog = () => {
  return (
    <div className='relative w-full h-screen flex justify-center items-center bg-gray-950'>
      {/* <Header/>
      Blog */}
      <h1 className='text-yellow-300 font-extrabold text-6xl uppercase animate-bounce'>Coming soon!</h1>
      <a href='/' className='text-yellow-300 border border-yellow-300 font-semibold text-2xl rounded-full absolute bottom-48 w-48 h-16 mx-auto text-center flex justify-center items-center gap-2 animate-pulse'><BsFillArrowLeftSquareFill /> Go Back!</a>
    </div>
  )
}

export default Blog