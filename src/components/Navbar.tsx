'use client'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { SheetDemo } from './Mysheet'
import { ModeToggle } from './ToggleMode'
import { signIn } from 'next-auth/react'

const Navbar = () => {
    return (
        <div className=' sticky top-0 flex items-center z-10 justify-between md:px-20 px-5 py-4 border-b backdrop-blur'>
            <Link href={"/"} className="logo text-xl font-semibold"> Salman Blogs</Link>
            <div className='md:flex md:gap-4 md:items-center hidden'>
                <div className='flex gap-4 mx-8'>
                    <Link className='hover:font-semibold hover:scale-105 ease-in-out duration-300' href={"/"}>Home</Link>
                    <Link className='hover:font-semibold hover:scale-105 ease-in-out duration-100' href={"/about"}> About</Link>
                    <Link className='hover:font-semibold  hover:scale-105 ease-in-out duration-300' href={"/blog"}>Blogs</Link>
                    <Link className='hover:font-semibold  hover:scale-105 ease-in-out duration-300' href={"/contact-us"}>Contact Us</Link></div>
                    <ModeToggle/>
                <Button onClick={()=>signIn()}>Login</Button>
                <Button>Join Us</Button>
            </div>
            <div className='md:hidden'>
                <SheetDemo> <Menu className='md:hidden' /></SheetDemo></div>
        </div>
    )
}

export default Navbar