import { AiFillCode, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillShopping, AiFillMediumCircle, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import { TbBrandThreads } from 'react-icons/tb'
import GreenBox from './GreenBox'
import React from 'react'

const Boxs = () => {
    return (
        <div className='flex-col'>
            <GreenBox text={'Links'} data={[
                {
                    title: "Instagram",
                    icon: <AiFillInstagram color='pink' />,
                    url: 'https://www.instagram.com/enesgkky/'
                },
                {
                    title: "Linkedin",
                    icon: <AiFillLinkedin color='lightblue' />,
                    url: 'https://www.linkedin.com/in/enes-gökkaya/'
                },
                {
                    title: "twitter",
                    icon: <AiFillTwitterCircle color='black' />,
                    url: 'https://twitter.com/enesgkky1'
                },
                {
                    title: "pinteres",
                    icon: <BsPinterest color='red' />,
                    url: 'https://tr.pinterest.com/enesgkky/'
                },
                {
                    title: "github",
                    icon: <AiFillGithub color='orange' />,
                    url: 'https://github.com/enesgkky/'
                },
                {
                    title: "medium",
                    icon: <AiFillMediumCircle color='white' />,
                    url: 'https://medium.com/@eneagkky'
                },
                {
                    title: "youtube",
                    icon: <AiFillYoutube color='red' />,
                    url: 'https://youtube.com/@Dev_EnesGK?si=RVCmWy732G4EHNl2'
                },
                {
                    title: "e-mail",
                    icon: <AiFillMail color='white' />,
                    url: 'mailto:contact.enesgokkaya@gmail.com/'
                },
                {
                    title: "codewars",
                    icon: <AiFillCode color='orange' />,
                    url: 'https://www.codewars.com/users/enesgkky/'
                },
                {
                    title: "threads",
                    icon: <TbBrandThreads color='white' />,
                    url: 'https://www.threads.net/@enesgkky'
                },
                {
                    title: "bionluk",
                    icon: <AiFillShopping color='pink' />,
                    url: 'https://bionluk.com/enesgkky'
                },
            ]} />
            {/* <GreenBox text={'Projects'} data={[
                {
                    title: "This web site",
                    icon: <AiFillCode color='white' />,
                    url: 'https://www.instagram.com/enesgkky/'
                },
            ]} /> */}
        </div>
    )
}

export default Boxs