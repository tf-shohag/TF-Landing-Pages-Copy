// HeroServer.jsx - Server Component
import Image from "next/image"
import HeroContent from "./HeroContent" // Server component
import FormLoader from "./FormLoader" // Client component

const HeroServer = () => {
  return (
    <div className="min-h-[800px] flex items-center justify-center relative">
      {/* Static background color (server-rendered) */}
      <div className="absolute inset-0 bg-[#364a5d]" style={{ zIndex: -1 }}></div>
      
      {/* Image (server-rendered) */}
      <Image
        src="/dfi/hero.webp"
        alt="Digital Forensic Investigation Background"
        fill
        priority={true}
        quality={75}
        fetchPriority="high"
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          zIndex: -1,
        }}
      />

      <div className="flex items-center justify-between gap-4 container mx-auto">
        {/* Main content area (server-rendered) */}
        <HeroContent />
        
        {/* Form area - client component wrapper */}
        <div className="hidden md:block h-full">
          <FormLoader formId="desktop" />
        </div>
      </div>
    </div>
  )
}

export default HeroServer