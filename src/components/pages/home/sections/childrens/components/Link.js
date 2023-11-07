import React from 'react'

const Link = ({ icon, text, url }) => {
    return (
        <a
            target='_blank'
            href={url}
            className={``}>
            <div className={`flex gap-1 items-center p-2 flex-grow-1 basis-52 cursor-pointer border rounded-xl opacity-50 hover:opacity-100 transition-opacity`}>
                {icon}
                <h1 className='uppercase font-mono text-[.6rem] md:text-xs'>{text}</h1>
            </div>
        </a>
    )
}

export default Link