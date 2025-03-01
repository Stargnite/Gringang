import {Badge} from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQ = () => {
	return (
		<section id="faq" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-900/60 text-purple-200 hover:bg-purple-900/80">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                Questions
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our NFT collection, purchasing process, and more.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="border border-purple-500/20 rounded-lg overflow-hidden bg-purple-900/10"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-purple-900/20 transition-colors">
                  What is an NFT?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  NFT stands for Non-Fungible Token. It&apos;s a digital asset that represents ownership of a unique item or
                  piece of content on the blockchain, making it one-of-a-kind and not interchangeable with any other
                  token.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border border-purple-500/20 rounded-lg overflow-hidden bg-purple-900/10"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-purple-900/20 transition-colors">
                  How do I purchase an NFT from your collection?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  To purchase an NFT, you&apos;ll need a digital wallet and cryptocurrency (typically Ethereum). Connect your
                  wallet to our platform, browse the collection, and click {"Buy Now"} or place a bid on the NFT you want
                  to acquire.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border border-purple-500/20 rounded-lg overflow-hidden bg-purple-900/10"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-purple-900/20 transition-colors">
                  What makes your NFT collection unique?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Our collection stands out through its artistic quality, limited supply, and the exclusive benefits for
                  holders. Each piece is created by our team of talented artists and offers special access to community
                  events and future releases.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border border-purple-500/20 rounded-lg overflow-hidden bg-purple-900/10"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-purple-900/20 transition-colors">
                  Can I sell my NFT after purchasing?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Yes, you can sell your NFT on our platform or any compatible NFT marketplace. As the owner, you have
                  full rights to sell, trade, or transfer your NFT to others.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border border-purple-500/20 rounded-lg overflow-hidden bg-purple-900/10"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-purple-900/20 transition-colors">
                  How do I join your community?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  You can join our community by following us on social media, joining our Discord server, or subscribing
                  to our newsletter. Owning one of our NFTs also grants you special access to exclusive community areas
                  and events.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
	)
}

export default FAQ
