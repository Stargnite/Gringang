import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function NftCard({ id }: { id: number }) {
  return (
    <Card className="bg-black/40 border-purple-500/20 overflow-hidden hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={`/placeholder.svg?height=400&width=400&text=NFT${id}`}
          alt={`NFT #${id}`}
          width={400}
          height={400}
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
          <div className="p-4 w-full">
            <Button size="sm" className="w-full bg-pink-600 hover:bg-pink-700">
              View Details
            </Button>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold">Cosmic Dream #{id}</h3>
            <p className="text-sm text-gray-400">By @artist{id}</p>
          </div>
          <Badge variant="outline" className="border-purple-500 text-purple-400">
            {id % 2 === 0 ? "Rare" : "Common"}
          </Badge>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm">
            <span className="text-gray-400">Price:</span> <span className="font-bold">{(id * 0.5).toFixed(1)} ETH</span>
          </p>
          <p className="text-xs text-gray-400">#{id} of 10K</p>
        </div>
      </CardContent>
    </Card>
  )
}