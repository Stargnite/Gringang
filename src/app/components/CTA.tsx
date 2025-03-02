import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CTA = () => {
	return (
		<section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/0 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-900/60 text-purple-200 hover:bg-purple-900/80">Join Now</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Own a Piece of{" "}
              <span className="bg-gradient-to-r bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Digital History?
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Don&apos;t miss your chance to be part of our exclusive NFT collection. Join our community today and stay
              updated on upcoming releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
              >
                Connect Wallet
              </Button>
              <Button size="lg" variant="outline" className="bg-white border-purple-500 text-purple-400 hover:bg-purple-950/50">
                Join Discord
              </Button>
            </div>
          </div>
        </div>
      </section>
	)
}

export default CTA
