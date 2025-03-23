"use-client"

import Link from "next/link";
// import { Button } from "@/components/ui/button";
import logo from "@/images/logo.png"
import Image from "next/image";
import { motion } from "framer-motion"

export default function Navbar() {
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
        <nav className="hidden md:flex items-center gap-6">
          {/* <Link href="#collection" className="hover:text-red-400 transition-colors">
            Collection
          </Link> */}
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
