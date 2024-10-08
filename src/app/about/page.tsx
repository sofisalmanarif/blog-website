import { EnvelopeOpenIcon } from '@radix-ui/react-icons'
import { InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div className="w-full h-[93vh] ">

            <div className="md:flex  h-full">
                {/* Profile Image Section */}
                <div className="md:flex-shrink-0 w-[65%]">
                    <div className="relative w- h-60 md:h-full md:w-full">
                        <img
                            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Update with your image path
                            alt="Profile Image"

                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Profile Info Section */}
                <div className="px-20 py-20 w-full ">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Sofi Salman
                    </h2>
                    <p className="text-lg font-semibold text-gray-500 ">
                        Software Developer from Kashmir
                    </p>
                    <Link
                        href="#"
                        className="my-4 inline-block bg-black text-white py-2 px-4 rounded-lg"
                    >
                        Visit my company website
                    </Link>
                    <p className="text-gray-700 leading-relaxed text-justify">
                        I am a web developer having expertise in Next.js, React, TypeScript, and Node.js. Over the years, I have developed a deep understanding of building scalable web applications and creating seamless user experiences. I am passionate about staying up-to-date with the latest industry trends and continuously improving my skills. In addition to my technical abilities, I enjoy collaborating with cross-functional teams to deliver high-quality projects. My goal is to leverage technology to solve real-world problems and make a positive impact.
                    </p>

                    <div>
                        <h2 className="text-lg mt-6 font-semibold text-gray-500 mb-1">
                            Education
                        </h2>
                        <p className='text-gray-700 leading-relaxed text-justify'>Bachlors of Computer Applicaton </p>
                        <p className='text-gray-700 leading-relaxed text-justify'> University of kashmir</p>
                    </div>



                    {/* Social Links */}




                    <div className="mt-6 flex space-x-4">
                        <Link href="#" className="text-gray-500 hover:text-black">
                            <LinkedinIcon />
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-black">
                            <InstagramIcon />
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-black">
                            <TwitterIcon />
                        </Link>
                        <Link href="#" className="text-gray-500 text-2xl hover:text-black">
                            <EnvelopeOpenIcon />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page