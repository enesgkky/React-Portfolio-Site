import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs'
import classNames from 'classnames'
import { useContext } from 'react'
import { Context } from '../../../../Context/SiteContext'
import { useState } from 'react'

const Header = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  window.addEventListener('resize', () => setScreenSize(window.innerWidth))
  const { theme, setTheme } = useContext(Context)
  return (
    <div className={classNames({
      " h-[20rem] grid justify-center py-10 relative transition-colors": true,
      "bg-gray-100": theme === 'light',
      "bg-gray-900": theme === 'dark'
    })}>
      <div className='h-fit w-fit rounded-full overflow-hidden shadow-2xl mx-auto hover:animate-pulse'>
        <img className='w-36 h-36' src='/profilePhoto.jpeg' alt=''></img>
      </div>
      <div className='text-center'>
        <h1 className={classNames({
          "font-mono text-2xl": true,
          "text-black": theme === 'light',
          "text-white": theme === 'dark'
        })}>Enes Gökkaya</h1>
        <h1 className={classNames({
          "font-mono text-xs opacity-70": true,
          "text-black": theme === 'light',
          "text-white": theme === 'dark'
        })}>Web Developer & Web Application Security</h1>
      </div>
      <a href='/' className={classNames({
        'absolute top-10 left-10 uppercase px-4 h-10 font-mono rounded text-sm flex gap-2 items-center shadow transition-colors font-semibold': true,
        'bg-gray-900 text-white hover:bg-gray-700': theme === 'light',
        'bg-gray-200 text-black hover:bg-gray-400': theme === 'dark',
        'top-5 left-5': screenSize < 948
      })}><AiFillHome size={14} />{screenSize < 1000 ? '' : 'Home'}</a>
      <button className={classNames({
        "absolute top-10 right-10 px-4 h-10 rounded shadow transition-colors text-sm": true,
        'bg-gray-900 hover:bg-gray-700': theme === 'light',
        'bg-gray-200 hover:bg-gray-400': theme === 'dark',
        'top-5 right-5': screenSize < 948
      })} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>

        {theme === 'light' ? <BsFillMoonFill size={14} color={'white'} /> : <BsSunFill color={'black'} />}

      </button>
    </div>
  )
}

export default Header