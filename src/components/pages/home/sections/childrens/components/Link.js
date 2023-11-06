import React from 'react'

const Link = ({ icon, text, url }) => {
    return (
        <a
            target='_blank'
            href={url}
            className={``}>
            <div className={`flex gap-1 p-2  cursor-pointer border rounded-xl opacity-50 hover:opacity-100 transition-opacity`}>
                {icon}
                <h1 className='uppercase font-mono text-xs'>{text}</h1>
            </div>
        </a>
    )
}

export default Link