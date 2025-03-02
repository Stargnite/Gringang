import RoadmapItem from "@/app/components/RoadmapItem"
import { Badge } from "@/components/ui/badge"
import Animation from "./animation"

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-900/60 text-purple-200 hover:bg-purple-900/80">Roadmap</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Our{" "}
            {/* <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"> */}
            Journey Ahead
            {/* </span> */}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We have big plans for our NFT collection. Follow our roadmap to see what&apos;s coming next and how we&apos;re
            building for the future.
          </p>
        </div>

        <div className="space-y-12">
          <Animation duration={.5} delay={.5} direction="x" reverse={true}>
            <RoadmapItem
              phase="Phase 1"
              title="Collection Launch"
              description="Initial release of 5,000 unique NFTs with special benefits for early adopters."
              date="Q2 2025"
              isLeft={true}
            />
          </Animation>
          <Animation duration={.5} delay={.5} direction="x">
            <RoadmapItem
              phase="Phase 2"
              title="Community Expansion"
              description="Building our community with exclusive events and collaborations with artists."
              date="Q3 2025"
              isLeft={false}
            />
          </Animation>
          <Animation duration={.5} delay={.5} direction="x" reverse={true}>
            <RoadmapItem
              phase="Phase 3"
              title="Marketplace Integration"
              description="Launch of our dedicated marketplace for trading and showcasing NFTs."
              date="Q4 2025"
              isLeft={true}
            />
          </Animation>
          <Animation duration={.5} delay={.5} direction="x">
            <RoadmapItem
              phase="Phase 4"
              title="Metaverse Experience"
              description="Creating immersive virtual experiences where collectors can display their NFTs."
              date="Q1 2026"
              isLeft={false}
            />
          </Animation>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
