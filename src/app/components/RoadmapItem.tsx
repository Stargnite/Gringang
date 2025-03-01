import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export default function RoadmapItem({
  phase,
  title,
  description,
  date,
  isLeft,
}: {
  phase: string
  title: string
  description: string
  date: string
  isLeft: boolean
}) {
  return (
    <div className={`flex flex-col md:flex-row items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      <div className={`flex-1 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
        <Badge className="mb-2 bg-purple-900/60 text-purple-200 hover:bg-purple-900/80">{phase}</Badge>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-2">{description}</p>
        <p className="text-sm text-purple-400">{date}</p>
      </div>

      <div className="mx-4 my-4 md:my-0 relative">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center relative z-10">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-purple-400" />
          </div>
        </div>
      </div>

      <div className="flex-1 md:invisible">{/* Empty div for layout balance */}</div>
    </div>
  )
}