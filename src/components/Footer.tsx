import { InstagramLogoIcon } from '@radix-ui/react-icons'
import { InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex ">
              <Link href={"https://www.linkedin.com/in/sofi-salman-73a0b8249/"} className=" text-blue-400 shadow-lg flex font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
              <LinkedinIcon/></Link>
              <span className="bg-white text-red-600 flex  shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" >
              <InstagramIcon/></span>
              <span className="bg-white text-              black shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" >
                <TwitterIcon/></span>
               
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/about">About Us</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/blog">Blog</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/sofisalmanarif">Github</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Free Products</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/sofisalmanarif">MIT License</Link>
                  </li>
                  <li>
                    <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300"/>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2024</span>
                <Link href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank"> Sofi </Link>
                  <Link href="https://www.creative-tim.com?ref=njs-profile" className="text-blueGray-500 hover:text-blueGray-800">Salman</Link>. 
              </div>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer