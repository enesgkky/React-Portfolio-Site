import React from 'react'

const Card = ({text}) => {
    return (
        <div className='cursor-default hover:bg-[rgb(5,255,153,0.32)] hover:backdrop-blur-3xl hover:text-white transition-all p-2 px-4 text-[.5rem] md:text-xs bg-white text-black rounded-3xl uppercase flex justify-center items-center font-semibold'>
            {text}
        </div>
    )
}

export default Card