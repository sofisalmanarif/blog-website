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
     <div className='flex flex-col justify-center items-center h-[80vh] gap-4 mx-8'>
     <Link className='hover:font-semibold ease-in-out' href={"/"}>Home</Link>
                    <Link className='hover:font-semibold ease-in-out' href={"/"}> About</Link>
                    <Link className='hover:font-semibold ease-in-out' href={"/"}>Blogs</Link>
                    <Link className='hover:font-semibold ease-in-out' href={"/"}>Contact Us</Link>
                   
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
