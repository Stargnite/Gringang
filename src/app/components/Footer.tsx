"use client"

import Link from "next/link";
import { Twitter, Disc } from "lucide-react";
import logo from "@/images/logo.jpg"
import Image from "next/image";
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="border-t border-purple-900/40 py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src={logo} alt="logo" className="h-6 w-6" />
              <motion.span
                animate={{
                  backgroundPositionX: "100%",
                }}
                transition={{
                  duration: 1,
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
            <p className="text-white text-sm">
              Discover, collect, and sell extraordinary NFTs on the world&apos;s first and largest marketplace.
            </p>
            <div className="flex gap-4">
              <Link href="https://x.com/GrinGang_" className="text-white hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://discord.gg/gringang" className="text-white hover:text-purple-400 transition-colors">
                <Disc className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
              {/* <Link href="#" className="text-white hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link> */}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Marketplace</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white hover:text-purple-400 transition-colors text-sm">
                  All NFTs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-purple-400 transition-colors text-sm">
                  Art
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-purple-400 transition-colors text-sm">
                  Collectibles
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-purple-400 transition-colors text-sm">
                  Music
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white hover:text-purple-400 transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-purple-400 transition-colors text-sm">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-purple-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-purple-400 transition-colors text-sm">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white hover:text-purple-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-purple-400 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-purple-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-purple-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900/40 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">&copy; {new Date().getFullYear()} GRINGANG NFTs. All rights reserved.</p>
          <p className="text-white text-sm mt-2 md:mt-0">Powered by Blockchain Technology</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
