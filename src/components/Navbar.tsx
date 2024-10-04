import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { SheetDemo } from './Mysheet'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between md:px-20 px-5 py-4 border-b backdrop-blur'>
            <div className="logo text-xl font-semibold"> Salman Blogs</div>
            <div className='md:flex md:gap-4 md:items-center hidden'>
                <div className='flex gap-4 mx-8'>
                    <Link className='hover:font-semibold ease-in-out' href={"/"}>Home</Link>
                    <Link className='hover:font-semibold ease-in-out' href={"/"}> About</Link>
                    <Link className='hover:font-semibold ease-in-out' href={"/"}>Blogs</Link>
                    <Link className='hover:font-semibold ease-in-out' href={"/"}>Contact Us</Link></div>
                <Button>Login</Button>
                <Button>Join Us</Button>
            </div>
            <div className='md:hidden'>
                <SheetDemo> <Menu className='md:hidden' /></SheetDemo></div>
        </div>
    )
}

export default Navbar