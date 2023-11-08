import classNames from 'classnames'
import React from 'react'
import { useContext } from 'react'
import { Context } from '../../../../Context/SiteContext'
import { FiExternalLink } from 'react-icons/fi'


const Header = () => {
    const { theme } = useContext(Context)
    return (
        <header
            className={classNames({
                "w-full h-16 fixed top-0 z-50 uppercase font-semibold flex justify-center gap-8 md:gap-24 items-center": true,
                "text-white": theme === 'dark',
                "text-black": theme === 'light',
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