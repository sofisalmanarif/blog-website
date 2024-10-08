import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const Page = () => {
    return (
        <section className="bg-white min-h-svh dark:bg-black">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-lg">
  Have a question, collaboration idea, or just want to say hello? Feel free to get in touch, we&apos;re here to help!
</p>


                <form action="#" className="space-y-8">
                    <div>
                        <Label htmlFor="email">Your Email</Label>
                        <Input placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <Label htmlFor="email">Subject</Label>

                        <Input className='' placeholder="Let us know how we can help you" required />

                    </div>
                    <div className="sm:col-span-2">
                        <Label htmlFor="message">Your message</Label>
                        <textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:bg-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <Button type="submit" className='w-full' >Send message</Button>
                </form>
            </div>
        </section>
    )
}

export default Page