import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import  Link from "next/link"

interface PropType{
    children:React.ReactNode
}
export function SheetDemo({children}:PropType) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">{children}</Button>
      </SheetTrigger>
      <SheetContent>
     <SheetHeader>
        <SheetTitle><h1 className="md:text-xl md:font-bold">SalmanBlog</h1></SheetTitle>
     <div className='flex flex-col justify-center h-[80vh] space-x-4 my-8'>
     <Link className='hover:font-semibold ease-in-out duration-600' href={"/"}>Home</Link>
                    <Link className='md:text-4xl hover:font-semibold ease-in-out duration-600' href={"/"}> About</Link>
                    <Link className='hover:font-semibold ease-in-out duration-600' href={"/"}>Blogs</Link>
                    <Link className='hover:font-semibold ease-in-out duration-600' href={"/"}>Contact Us</Link>
                   
                    </div>
               
     </SheetHeader>
                
       
        
        <SheetFooter>
          <SheetClose asChild>
           <div className="flex items-center justify-center w-full gap-2">
           <Button>Login</Button>
           <Button>Join Us</Button>
           </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
