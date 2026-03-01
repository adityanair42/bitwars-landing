import Image from "next/image"
import Reveal from "@/components/reveal"

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="dot-bg bg-[#0e0e0e] py-28 px-8 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-space-mono text-xs text-[#D2F65A] tracking-[0.3em] mb-4 uppercase">Backed by</p>
          <h2 className="font-space-mono text-3xl md:text-4xl font-bold text-white tracking-tight mb-16 border-b border-white/10 pb-6">
            Sponsors
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="flex flex-wrap gap-16 items-center justify-center">
            <div className="relative w-44 h-14 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <Image src="/monolab.png" alt="Monolab" fill className="object-contain" />
            </div>
            <div className="relative w-36 h-14 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <Image src="/unstop.png" alt="Unstop" fill className="object-contain" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
