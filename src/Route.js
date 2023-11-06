import React from 'react'
import Home from './components/pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import NotFounde from './NotFounde'
import Blog from './components/pages/blog/Blog'

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='*' element={<NotFounde />} />
            </Routes>
        </>
    )
}

export default Router