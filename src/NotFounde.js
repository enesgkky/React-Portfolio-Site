import React from 'react'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

const NotFound = () => {
    return (
        <div className='w-full h-screen bg-gray-950 flex justify-center items-center'>
            <div className='relative h-1/3'>
                <h1 className='text-yellow-300 cursor-default font-extrabold text-4xl md:text-6xl animate-bounce mx-auto'>NOT FOUND!</h1>
                <a href='/' className='text-yellow-300 border w-24 md:w-36 border-yellow-300 font-semibold text-sm rounded p-2 absolute bottom-0 mx-auto left-0 right-0 text-center flex justify-center items-center gap-2 animate-pulse'><BsFillArrowLeftSquareFill/> Go Back!</a>
            </div>
        </div>
    )
}

export default NotFound