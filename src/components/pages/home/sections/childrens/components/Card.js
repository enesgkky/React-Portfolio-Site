import React from 'react'

const Card = ({text}) => {
    return (
        <div className='cursor-default hover:backdrop-blur-3xl transition-all p-2 px-4 text-[.5rem] md:text-xs rounded-3xl uppercase flex justify-center items-center font-semibold text-white hover:bg-green-600 bg-[rgb(5,255,153,0.12)] border border-green-700'>
            {text}
        </div>
    )
}

export default Card