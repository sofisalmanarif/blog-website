import React from 'react'
import { Button } from './ui/button'

const Card = () => {
  return (
    


        
        <div className="relative flex  flex-col mt-6 dark:bg-gray-900 text-gray-700 hover:shadow-xl ease-in-out duration-300  dark:text-white shadow-md bg-clip-border rounded-xl w-92 md:w-[28rem]">
            <div className="relative  flex justify-center mt-4 overflow-hidden text-gray-700  dark:text-white bg-clip-border rounded-xl h-80">
                <img
                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                    alt="card-image" className="object-cover w-[90%] rounded-xl h-full" />
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        Apple AirPods
                    </p>
                    
                </div>
                <p className="block dark:text-white font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                    With plenty of talk and listen time, voice-activated Siri access, and an
                    available wireless charging case.
                </p>
            </div>
            <div className="p-6 pt-0">
                <Button
                variant={'outline'}
                    >
                    Read More
                </Button>
            </div>
        </div>
   

  )
}

export default Card