import React from 'react'
import Link from './Link'

const GreenBox = ({ text, data }) => {
    return (
        <div
            className='border border-green-800 rounded-2xl py-4 flex-col mx-5 test mb-5'
        >
            <h1
                className='text-center font-mono text-sm md:text-2xl'
            >
                {text}
            </h1>
            <div className='px-5 flex flex-wrap text-center gap-3 pt-3'>
                {data.map((element, index) => {
                    return <Link text={element.title} icon={element.icon} url={element.url} key={index} />
                })}
            </div>
        </div>
    )
}

export default GreenBox