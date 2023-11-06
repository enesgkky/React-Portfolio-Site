import React from 'react'
import Link from './components/Link'
import { AiFillCode, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillMediumCircle, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'

const Third = () => {
    return (
        <article
            className='w-full h-full flex justify-center items-center text-white'
        >
            <div
                className='border p-4 flex-col test'
            >
                <h1
                    className='text-center font-mono text-2xl'
                >
                    LINKS
                </h1>
                <div className='px-5 flex flex-wrap gap-3 pt-3'>
                    <Link text={'instagram'} icon={<AiFillInstagram color='pink'/>} color='pink' url={'https://www.instagram.com/enesgkky/'}/>
                    <Link text={'linkedin'} icon={<AiFillLinkedin color='lightblue'/>} color='pink' url={'https://www.linkedin.com/in/enes-g%C3%B6kkay'}/>
                    <Link text={'twitter or x'} icon={<AiFillTwitterCircle color='black'/>} color='pink' url={'https://twitter.com/enesgkky'}/>
                    <Link text={'pinteres'} icon={<BsPinterest color='red'/>} color='pink' url={'https://tr.pinterest.com/enesgkky/'}/>
                    <Link text={'github'} icon={<AiFillGithub color='orange'/>} color='pink' url={'https://github.com/enesgkky/'}/>
                    <Link text={'medium'} icon={<AiFillMediumCircle color='white'/>} color='pink' url={'https://medium.com/@eneagkky'}/>
                    <Link text={'youtube'} icon={<AiFillYoutube color='red'/>} color='pink' url={'https://youtube.com/@Dev_EnesGK?si=RVCmWy732G4EHNl2'}/>
                    <Link text={'e-mail'} icon={<AiFillMail color='white'/>} color='pink' url={'mailto:contact.enesgokkaya@gmail.com/'}/>
                    <Link text={'codewars'} icon={<AiFillCode color='orange'/>} color='pink' url={'https://www.codewars.com/users/enesgkky/'}/>
                </div>
            </div>
        </article>
    )
}

export default Third