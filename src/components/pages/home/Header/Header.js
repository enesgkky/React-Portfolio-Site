import classNames from 'classnames'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'


const Header = () => {
    return (
        <header
            className={classNames({
                "w-full h-16 bg-transparent fixed top-0 z-50 uppercase font-semibold flex justify-center gap-8 md:gap-24 items-center backdrop-blur-sm text-white": true,
            })}
        >
            <a className='hover:text-green-600 transition-all duration-400' href='#home'>Home</a>
            <a className='hover:text-green-600 transition-all duration-400' href='#about'>About</a>
            <a className='hover:text-green-600 transition-all duration-400' href='#links'>Links</a>
            <a className='hover:text-green-600 transition-all duration-400 flex items-center gap-1' href='/blog'>Blog <FiExternalLink /></a>
        </header>
    )
}

export default Header