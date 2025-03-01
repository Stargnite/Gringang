import Image from "next/image"
import Link from "next/link"
import { Twitter, Instagram } from "lucide-react"

function TeamMember({
  name,
  role,
  image,
}: {
  name: string
  role: string
  image: string
}) {
  return (
    <div className="group">
      <div className="relative mb-4 rounded-xl overflow-hidden">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
        <div className="relative aspect-square overflow-hidden rounded-xl border border-purple-500/20 group-hover:border-purple-500/50 transition-all">
          <Image src={image || "/placeholder.svg"} alt={name} width={300} height={300} className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-400">{role}</p>
    </div>
  )
}

export default TeamMember;