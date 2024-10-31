import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
console.log(process.env.RESEND_API_KEY)

type APIResponse = {
    success: boolean;
    message: string;
    data?: object;
    error?: string;
  };

const Page = () => {
    const handleSubmitForm = async (formData: FormData):Promise<APIResponse> => {
        'use server'
        // Extract form data directly from the FormData object
        const email = formData.get('email')?.toString() || '';
        const subject = formData.get('subject')?.toString() || '';
        const message = formData.get('message')?.toString() || '';

        // console.log("Form submitted with data:", { email, subject, message });

        // You can perform further actions like sending the data to a backend, etc.
        try {
           
        
            const { data, error } = await resend.emails.send({
              from: 'Acme <onboarding@resend.dev>',
              to: 'sofisalman9906@gmail.com',
              subject: subject,
              react: EmailTemplate({ email, subject, message }),
            });
        
            if (error) {
                return { success: false, message: error.message || "Failed to send email.", error: error.message };

            }
        console.log("data",data)
            return { success: true, message: "Your message has been sent successfully!" };
          } catch (error : unknown) {
            if (error instanceof Error) {
                return { success: false, message: "An unexpected error occurred.", error: error.message };
              }
              return { success: false, message: "An unexpected error occurred.", error: "Unknown error" };
          }
    }
const submit =async (formdata:FormData)=>{
    'use server'
   const res =  await handleSubmitForm(formdata)
   if(res?.success){
       console.log("res",res)

   }
}

    return (
        <section className="bg-white min-h-svh dark:bg-black">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-lg">
                    Have a question, collaboration idea, or just want to say hello? Feel free to get in touch, we&apos;re here to help!
                </p>



                <form action={submit} className="space-y-8">
                    <div>
                        <Label htmlFor="email">Your Email</Label>
                        <Input placeholder="name@flowbite.com" name='email' type='email' required />
                    </div>
                    <div>
                        <Label htmlFor="email">Subject</Label>

                        <Input className='' name='subject'  placeholder="Let us know how we can help you" required />

                    </div>
                    <div className="sm:col-span-2">
                        <Label htmlFor="message">Your message</Label>
                        <textarea id="message" name='message' className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:bg-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <Button type="submit" className='w-full' >Send message</Button>
                </form>
            </div>
        </section>
    )
}

export default Page