import React from 'react'
import { Button, buttonVariants } from './ui/button'
import Link from 'next/link'

export type BlogType = {
    title?: string,
      image?:string,
      description?: string,
      content?: string,
      author?:string,
      date?:string,
      slug?: string
}
const Card: React.FC<{ blog: BlogType }> = ({blog}) => {
  return (
    


        
        <div className="relative flex  h-96 flex-col mt-6 dark:bg-gray-900 text-gray-700 hover:shadow-xl ease-in-out duration-300  dark:text-white shadow-md bg-clip-border rounded-xl w-92 md:w-[28rem]">
            <div className="relative  flex justify-center mt-4 overflow-hidden text-gray-700  dark:text-white bg-clip-border rounded-xl h-80">
                <img
                    src={blog.image}
                    alt="card-image" className="object-cover w-[90%] rounded-xl h-full" />
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {blog.title}
                    </p>
                    
                </div>
                <p className="block dark:text-white font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                   {blog.description}
                </p>
            </div>
            <div className="p-6 pt-0">
               
                <Link href={`/blog/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>Click here</Link>

            </div>
        </div>
   

  )
}

export default Card