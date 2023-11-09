import React from 'react'
import classNames from 'classnames'
import { useContext } from 'react'
import { Context } from '../../../../../Context/SiteContext'


const BlogBox = ({ title, description, img }) => {

    const { theme } = useContext(Context)

    return (
        <a href='/'>
            <div className={classNames({
                "w-full h-48 rounded-2xl shadow-lg mb-10 flex overflow-hidden": true,
                "bg-white text-black": theme === 'light',
                "bg-gray-900": theme === 'dark'
            })}>
                <div className='w-1/3 overflow-hidden'>
                    <img className='w-full h-full object-cover' src='https://miro.medium.com/v2/resize:fill:224:224/1*1O0RTWlZGD1VxKwmD81Ulw.jpeg' />
                </div>
                <div className='w-2/3 p-5'>
                    <h1 className={classNames({
                        "text-xl": true,
                        "text-white": theme === 'dark',
                        "text-black": theme === 'light'
                    })}>{title}</h1>
                    <p className={classNames({
                        "w-full h-full": true,
                        "text-white": theme === 'dark',
                        "text-black": theme === 'light'
                    })}>{description}</p>
                </div>
            </div>
        </a>
    )
}

export default BlogBox