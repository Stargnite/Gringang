"use-client"

import Link from "next/link";
// import { Button } from "@/components/ui/button";
import logo from "@/images/logo.png"
import Image from "next/image";
import { motion } from "framer-motion"
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="border-b border-purple-900/40 backdrop-blur-md fixed top-0 w-full z-50" >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" className="h-6 w-6" />
          <motion.span
            animate={{
              backgroundPositionX: "100%",
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="
          bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%]
          font-bold text-xl text-transparent bg-clip-text">
            GRINGANG
          </motion.span>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={`py-5 flex flex-col space-y-3 p-5 md:hidden md:space-x-6 absolute md:static left-0 w-full md:w-auto bg-[#DD7DDF] md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? "top-16" : "top-[-200px]"}`}
        // className="hidden md:flex items-center gap-6"
        >

          <Link href="#about" className="hover:text-red-400 transition-colors" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#roadmap" className="hover:text-red-400 transition-colors" onClick={() => setIsOpen(false)}>
            Roadmap
          </Link>
          <Link href="#faq" className="hover:text-red-400 transition-colors" onClick={() => setIsOpen(false)}>
            FAQ
          </Link>
        </nav>


        <nav className="hidden md:flex items-center gap-6">

          <Link href="#about" className="hover:text-red-400 transition-colors">
            About
          </Link>
          <Link href="#roadmap" className="hover:text-red-400 transition-colors">
            Roadmap
          </Link>
          <Link href="#faq" className="hover:text-red-400 transition-colors">
            FAQ
          </Link>
        </nav>
        {/* <Button className="text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
          Connect Wallet
        </Button> */}
      </div>
    </header>
  )
};
