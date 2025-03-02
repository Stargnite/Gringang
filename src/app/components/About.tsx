"use client"

import Image from "next/image";
import { Sparkles, Users, Clock, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Img from "@/images/grin-combo.png"
import Animation from "./animation";
import { NftsData } from "./Hero";
import { useState, useEffect } from "react"

const About = () => {
  const [currentNft, setCurrentNft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNft((prev) => (prev + 1) % NftsData.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="py-16 md:py-24 relative bg-img">
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 hidden md:flex">
            <Animation duration={1} delay={1.5} direction="y">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-[#f27980] rounded-2xl blur-xl opacity-20" />
                <div className="relative aspect-square max-w-md rounded-2xl overflow-hidden border border-purple-500/30">
                  <Image
                    src={Img}
                    alt="About our NFT collection"
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </Animation>
          </div>

          <div className="flex-1 md:hidden overflow-hidden">
            <Animation duration={1} delay={1.5} direction="x">
              <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] mx-auto overflow-hidden">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl" />
                {NftsData.map((nft, index) => (
                  <div
                    key={index}
                    className={`absolute inset-4 transition-transform duration-500 ease-in-out ${index === currentNft ? "translate-x-0" : "translate-x-[150%]"
                      }`}
                    aria-hidden={index !== currentNft}
                  >
                    <Image
                      src={nft.picture || "/placeholder.svg"}
                      alt={nft.name}
                      width={500}
                      height={500}
                      className="relative z-10 rounded-2xl w-full h-full object-cover "
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-md p-3 rounded-xl z-20">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-bold text-white text-lg sm:text-2xl nft-name-font-2">
                            {nft.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-300">Rarity: {nft.rarity}/2000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Animation>
          </div>


          <div className="flex-1">
            <Animation duration={1} delay={1.5} direction="y">
              <div className="space-y-6">
                <Badge className="bg-purple-900/60 text-purple-200 hover:bg-purple-900/80">About Us</Badge>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-35% to-white text-transparent bg-clip-text">
                  The Story Behind Our Digital Masterpieces
                </h2>
                <p className="text-white">
                  Our NFT collection represents the discovery of the Golden Grin,
                  an ancient artifact uncovered by friends in the vibrant city of Grin,
                  which gifted them with irresistibly contagious smiles. Transformed into the Grin Gang,
                  they radiated joy, uplifted their community, and inspired countless others to join their cause.
                  Each member&apos;s unique smile and story became a testament to the power of collective kindness,
                  proving that even small acts of positivity can spark transformative change.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-purple-900/20 border border-purple-500/20 p-4 rounded-xl">
                    <Sparkles className="h-8 w-8 text-purple-400 mb-2" />
                    <h3 className="font-bold text-lg mb-1 text-blue-600">Unique Artwork</h3>
                    <p className="text-sm text-gray-300">
                      Each NFT is one-of-a-kind with verifiable scarcity and ownership.
                    </p>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-500/20 p-4 rounded-xl">
                    <Users className="h-8 w-8 text-purple-400 mb-2" />
                    <h3 className="font-bold text-lg mb-1 text-blue-600">Community Driven</h3>
                    <p className="text-sm text-gray-300">Join our vibrant community of collectors and creators.</p>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-500/20 p-4 rounded-xl">
                    <Clock className="h-8 w-8 text-purple-400 mb-2" />
                    <h3 className="font-bold text-lg mb-1 text-blue-600">Limited Releases</h3>
                    <p className="text-sm text-gray-300">Timed drops ensure fair distribution and exciting launches.</p>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-500/20 p-4 rounded-xl">
                    <Flame className="h-8 w-8 text-purple-400 mb-2" />
                    <h3 className="font-bold text-lg mb-1 text-blue-600">Exclusive Benefits</h3>
                    <p className="text-sm text-gray-300">Holders receive special access to events and future releases.</p>
                  </div>
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
