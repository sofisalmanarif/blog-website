import { Button } from '@/components/ui/button'
import { EnvelopeOpenIcon } from '@radix-ui/react-icons'
import { InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div className="w-full min-h-[93vh]  dark:text-white ">

            <div className="md:flex  ">
                {/* Profile Image Section */}
                <div className="md:flex-shrink-0 md:w-[65%] w-full">
                    <div className="relative w-full h-60 md:h-[93vh] md:w-full">
                        <Image
                        width={768}
                        height={240}
                         layout='respond'
                            src={"/me.jpeg"}
                            alt="Profile Image"

                            className="object-contain  w-full h-full"
                        />
                    </div>
                </div>

                {/* Profile Info Section */}
                <div className="md:px-20 md:py-20 px-6 py-6 w-full ">
                    <h2 className="text-3xl font-bold text-center md:text-left text-gray-900 dark:text-white mb-2">
                        Sofi Salman
                    </h2>
                    <p className="text-lg font-semibold text-center md:text-left text-gray-500 ">
                        Software Developer from Kashmir
                    </p>
                    <Link target='_blank' href={"https://salmanportfolio.vercel.app/"}
                        
                        className='my-4'
                    >
                        Visit my Portfolio website
                    </Link>
                    <p className="text-gray-700 dark:text-gray-500 leading-relaxed text-justify">
                        I am a web developer having expertise in Next.js, React, TypeScript, and Node.js. Over the years, I have developed a deep understanding of building scalable web applications and creating seamless user experiences. I am passionate about staying up-to-date with the latest industry trends and continuously improving my skills. In addition to my technical abilities, I enjoy collaborating with cross-functional teams to deliver high-quality projects. My goal is to leverage technology to solve real-world problems and make a positive impact.
                    </p>

                    <div>
                        <h2 className="text-lg mt-6 font-semibold text-gray-500 mb-1">
                            Education
                        </h2>
                        <p className='text-gray-700 dark:text-gray-500 leading-relaxed text-justify'>Bachlours of Computer Applicaton </p>
                        <p className='text-gray-700 dark:text-gray-500 leading-relaxed text-justify'> University of kashmir</p>
                    </div>



                    {/* Social Links */}




                    <div className="mt-6 flex space-x-4">
                        <Link href="https://www.linkedin.com/in/sofi-salman-73a0b8249/" className="text-gray-500 hover:text-black dark:hover:text-white">
                            <LinkedinIcon />
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-black dark:hover:text-white">
                            <InstagramIcon />
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-black dark:hover:text-white">
                            <TwitterIcon />
                        </Link>
                        <Link href="#" className="text-gray-500 text-2xl hover:text-black dark:hover:text-white">
                            <EnvelopeOpenIcon />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page