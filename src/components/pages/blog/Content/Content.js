import React from 'react'
import classNames from 'classnames'
import { useContext } from 'react'
import { Context } from '../../../../Context/SiteContext'
import BlogBox from './components/BlogBox'


const Content = ({ data }) => {

    const { theme } = useContext(Context)

    return (
        <article className={classNames({
            'w-full h-screen flex justify-center items-center': true,
            'bg-gray-200 text-white': theme === 'light',
            'bg-gray-950 text-black': theme === 'dark'
        })}>
            <div className='h-full w-full md:w-2/3 gap-5 px-5 pt-10'>
                <BlogBox title={'Blog title'} description={"Blog description"} />
            </div>
        </article>
    )
}

export default Content