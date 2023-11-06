import React from 'react'
import Card from './components/Card'

const Second = () => {
    return (
        <article
            className='w-full h-full pt-10 flex justify-center items-center'
        >
            <div className='w-5/6 h-fit flex text-white gap-5'>
                <div className='w-1/2 pt-12 overflow-hidden'>
                    <div className='bg-black w-full md:w-1/2 mx-0 md:mx-auto rounded-2xl overflow-hidden'>
                        <img className='opacity-70 hover:opacity-100 transition-all object-cover' src='/profilePhoto.jpeg' alt='me'></img>
                    </div>
                    <div className='w-full h-full text-center flex-col pt-5 md:text-base text-xs'>
                        <h1 className='uppercase font-mono'>Enes Gokkaya</h1>
                        <h1 className='uppercase font-mono text-[.4rem] opacity-50 md:text-xs'>Web Developer <br /> Web Application Security</h1>
                    </div>
                </div>
                <div className='w-full flex-col relative'>
                    <div className='py-5'>
                        <h1 className='text-2xl uppercase font-mono pb-2'>Development</h1>
                        <div className='flex flex-wrap gap-1'>
                            <Card text={'react.js'} />
                            <Card text={'node.js'} />
                            <Card text={'express.js'} />
                            <Card text={'tailwindcss'} />
                            <Card text={'boostrap'} />
                            <Card text={'HTML'} />
                            <Card text={'css'} />
                            <Card text={'javascript'} />
                            <Card text={'python'} />
                            <Card text={'django & flask'} />
                            <Card text={'sql'} />
                            <Card text={'mssql'} />
                            <Card text={'mongodb'} />
                            <Card text={'mysql'} />
                            <Card text={'c#'} />
                            <Card text={'c'} />
                            <Card text={'.net'} />
                            <Card text={'mvc'} />
                            <Card text={'rest api'} />
                        </div>
                    </div>
                    <div className='py-5'>
                        <h1 className='text-2xl uppercase font-mono pb-2'>other</h1>
                        <div className='flex flex-wrap gap-1'>
                            <Card text={'linux'} />
                            <Card text={'figma'} />
                            <Card text={'photoshop'} />
                            <Card text={'premier pro'} />
                            <Card text={'after effects'} />
                        </div>
                    </div>
                    <div className='py-5'>
                        <h1 className='text-2xl uppercase font-mono pb-2'>Languages</h1>
                        <div className='flex flex-wrap gap-1'>
                            <Card text={'Turkish'} />
                            <Card text={'English'} />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Second