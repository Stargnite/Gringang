import Image from "next/image";
import { Sparkles, Users, Clock, Flame } from "lucide-react";
import {Badge} from "@/components/ui/badge";

const About = () => {
	return (
		<section id="about" className="py-16 md:py-24 relative bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur-xl opacity-20" />
                <div className="relative aspect-square max-w-md rounded-2xl overflow-hidden border border-purple-500/30">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="About our NFT collection"
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <Badge className="bg-purple-900/60 text-purple-200 hover:bg-purple-900/80">About Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                The Story Behind Our{" "}
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                  Digital Masterpieces
                </span>
              </h2>
              <p className="text-gray-300">
                Our collection represents the convergence of art and technology, bringing unique digital assets to
                collectors worldwide. Each piece is carefully crafted by our team of talented artists and verified on
                the blockchain.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-purple-900/20 border border-purple-500/20 p-4 rounded-xl">
                  <Sparkles className="h-8 w-8 text-purple-400 mb-2" />
                  <h3 className="font-bold text-lg mb-1">Unique Artwork</h3>
                  <p className="text-sm text-gray-300">
                    Each NFT is one-of-a-kind with verifiable scarcity and ownership.
                  </p>
                </div>
                <div className="bg-purple-900/20 border border-purple-500/20 p-4 rounded-xl">
                  <Users className="h-8 w-8 text-purple-400 mb-2" />
                  <h3 className="font-bold text-lg mb-1">Community Driven</h3>
                  <p className="text-sm text-gray-300">Join our vibrant community of collectors and creators.</p>
                </div>
                <div className="bg-purple-900/20 border border-purple-500/20 p-4 rounded-xl">
                  <Clock className="h-8 w-8 text-purple-400 mb-2" />
                  <h3 className="font-bold text-lg mb-1">Limited Releases</h3>
                  <p className="text-sm text-gray-300">Timed drops ensure fair distribution and exciting launches.</p>
                </div>
                <div className="bg-purple-900/20 border border-purple-500/20 p-4 rounded-xl">
                  <Flame className="h-8 w-8 text-purple-400 mb-2" />
                  <h3 className="font-bold text-lg mb-1">Exclusive Benefits</h3>
                  <p className="text-sm text-gray-300">Holders receive special access to events and future releases.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
	)
}

export default About
