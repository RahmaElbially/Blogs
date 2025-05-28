import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function LayoutWithNavFooter() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}



export default LayoutWithNavFooter 
