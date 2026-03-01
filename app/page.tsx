import Navbar from "@/components/navbar"
import HeroSection from "@/components/sections/hero"
import SpeakerSection from "@/components/sections/speaker"
import PrizeSection from "@/components/sections/prize"
import SponsorsSection from "@/components/sections/sponsors"
import ContactSection from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="bg-[#151415] text-white">
      <Navbar />
      <HeroSection />
      <SpeakerSection />
      <PrizeSection />
      <SponsorsSection />
      <ContactSection />
    </main>
  )
}
