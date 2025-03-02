"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import CaptainNft from "@/images/captain.jpg"
import Nft1 from "@/images/nft1.jpg"
import Nft2 from "@/images/nft2.jpg"
import Nft3 from "@/images/nft3.jpg"
import Nft4 from "@/images/nft4.jpg"
// import backImg from "../images/large-grin.jpg"
import { useState, useEffect } from "react"
import Animation from "./animation"

const NftsData = [
  {
    picture: CaptainNft,
    name: "Captain Stone",
    rarity: "100"
  },
  {
    picture: Nft1,
    name: "Catalyst",
    rarity: "100"
  },
  {
    picture: Nft2,
    name: "Cooper",
    rarity: "100"
  },
  {
    picture: Nft3,
    name: "Sergio",
    rarity: "100"
  },
  {
    picture: Nft4,
    name: "Ryda",
    rarity: "100"
  },
]

const Hero = () => {
  const [currentNft, setCurrentNft] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNft((prev) => (prev + 1) % NftsData.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <Animation duration={1} delay={.5} direction="x">
            <Badge className="bg-purple-900/60 text-purple-200 hover:bg-purple-900/80 px-3 py-1 text-sm">
              Launching Soon
            </Badge>
            </Animation>
            <Animation duration={1} delay={1} direction="x">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="block bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Join The Gang</span>
              <span className="bg-gradient-to-r from-blue-900 via-gray-500 to-black text-transparent bg-clip-text">
                Acquire Rare Collectibles
              </span>
            </h1>
            </Animation>
            <Animation duration={1} delay={1.5} direction="x">
              <div className="gap-y-6">
            <p className="text-lg text-white max-w-xl">
              Explore our exclusive collection of unique digital art pieces. Each NFT is a one-of-a-kind masterpiece
              which verifies you as our gang member.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
              >
                Explore Collection
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white border-purple-500 text-purple-400 hover:bg-purple-950/50 transition-colors"
              >
                Learn More
              </Button>
            </div>

              </div>
            </Animation>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">5K+</span>
                <span className="text-sm text-white">Artworks</span>
              </div>
              <div className="h-10 w-px bg-purple-800/50" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">1K+</span>
                <span className="text-sm text-white">Artists</span>
              </div>
              <div className="h-10 w-px bg-purple-800/50" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">6K+</span>
                <span className="text-sm text-white">Community</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse" />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl" />
              {NftsData.map((nft, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-transform duration-500 ease-in-out ${index === currentNft ? "translate-x-0" : "translate-x-full"
                    }`}
                  aria-hidden={index !== currentNft}
                >
                  <Image
                    src={nft.picture || "/placeholder.svg"}
                    alt={nft.name}
                    width={500}
                    height={500}
                    className="relative z-10 rounded-2xl p-2 w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl z-20">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-white text-2xl nft-name-font-2">
                          {nft.name} 
                          {/* #{String(index + 1).padStart(3, "0")} */}
                        </h3>
                        <p className="text-sm text-gray-300">Rarity: {nft.rarity}/2000</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

{/* <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                      <Flame className="mr-2 h-4 w-4" /> Bid Now
                    </Button> */}