import Image from "next/image"
import BitwarsHeading from "@/components/bitwarsHeading"
import Reveal from "@/components/reveal"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#151415] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/background.svg" alt="" fill className="object-cover opacity-20" priority />
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[#151415]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 flex flex-col items-center text-center">
        <Reveal>
          <p className="font-space-mono text-xs tracking-[0.3em] text-[#D2F65A] mb-10 uppercase">
            IEEE Computer Society · VIT Chennai
          </p>
        </Reveal>

        <Reveal delay={100} className="w-full">
          <BitwarsHeading />
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 flex items-center gap-3">
            <div className="h-px w-12 bg-white/20" />
            <p className="font-space-mono text-sm tracking-widest text-white/50 uppercase">
              Competitive Programming + Hackathon
            </p>
            <div className="h-px w-12 bg-white/20" />
          </div>
        </Reveal>

        <Reveal delay={300} className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-white/60 font-space-mono text-sm">
            <span className="text-[#D2F65A]">/</span>
            <span>7–8 March 2026</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 font-space-mono text-sm">
            <span className="text-[#D2F65A]">/</span>
            <span>MG Auditorium, VIT Chennai</span>
          </div>
        </Reveal>

        <Reveal delay={400} className="mt-12 flex flex-wrap gap-4 justify-center">
          <a
            href="#prize"
            className="font-space-mono text-xs px-10 py-4 bg-[#D2F65A] text-black hover:bg-white transition-colors duration-200 tracking-widest uppercase"
          >
            View Prize Pool
          </a>
          <a
            href="#speaker"
            className="font-space-mono text-xs px-10 py-4 border border-white/20 text-white/60 hover:border-[#D2F65A] hover:text-[#D2F65A] transition-colors duration-200 tracking-widest uppercase"
          >
            Meet the Speaker
          </a>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/20">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}
