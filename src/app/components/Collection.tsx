import NFTCard from "./NFTCard"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const Collection = () => {
  return (
    <section id="collection" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-900/60 text-purple-200 hover:bg-purple-900/80">Collection</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              Exclusive NFTs
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Each piece in our collection is unique, with its own story and characteristics. Browse through our
            categories to find your perfect digital collectible.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-black/40 border border-purple-900/40">
              <TabsTrigger value="all">All Items</TabsTrigger>
              <TabsTrigger value="art">Art</TabsTrigger>
              <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
              <TabsTrigger value="music">Music</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <NFTCard key={item} id={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="art" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <NFTCard key={item} id={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="collectibles" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[5, 6, 7, 8].map((item) => (
                <NFTCard key={item} id={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="music" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[2, 4, 6, 8].map((item) => (
                <NFTCard key={item} id={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950/50">
            View All Collection
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Collection
