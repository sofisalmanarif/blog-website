import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { signIn, signOut, useSession } from "next-auth/react"
import  Link from "next/link"

interface PropType{
    children:React.ReactNode
}
export function SheetDemo({children}:PropType) {
  const session = useSession()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">{children}</Button>
      </SheetTrigger>
      <SheetContent>
     <SheetHeader>
        <SheetTitle>
          
      <h1 className="md:text-xl md:font-bold">TechThreads</h1></SheetTitle>
     <div className='flex flex-col py-20 h-[80vh] space-y-6 my-8'>
     <Link className='hover:font-semibold text-4xl ease-in-out duration-600' href={"/"}>Home</Link>
                    <Link className='text-4xl hover:font-semibold ease-in-out duration-600' href={"/about"}> About</Link>
                    <Link className=' text-4xl hover:font-semibold ease-in-out duration-600' href={"/blog"}>Blogs</Link>
                    <Link className='text-4xl hover:font-semibold ease-in-out duration-600' href={"/contact-us"}>Contact Us</Link>
                   
                    </div>
               
     </SheetHeader>
                
       
        
        <SheetFooter>
          <SheetClose asChild>
           <div className="flex items-center justify-center w-full gap-2">
           {
                        !session?.data?.user ? <Button onClick={() => signIn()}>Login</Button>:
                        <Button variant={'destructive'} onClick={()=>signOut()}> Log Out</Button>
                    }
           </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
