import { SheetDemo } from "@/components/Mysheet";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ButtonIcon } from "@radix-ui/react-icons";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <SheetDemo> <Menu/> </SheetDemo>
    </>
  );
}
