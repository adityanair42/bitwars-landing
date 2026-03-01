import Image from "next/image"
import Reveal from "@/components/reveal"

export default function SpeakerSection() {
  return (
    <section id="speaker" className="bg-[#0e0e0e] py-28 px-8">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-space-mono text-xs text-[#D2F65A] tracking-[0.3em] mb-4 uppercase">Keynote</p>
          <h2 className="font-space-mono text-3xl md:text-4xl font-bold text-white tracking-tight mb-16 border-b border-white/10 pb-6">
            Featured Speaker
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="relative w-44 h-44 rounded-full overflow-hidden shrink-0">
              <Image src="/speaker.png" alt="Manas Tiwari" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-space-mono text-[#D2F65A] text-xs tracking-widest mb-1 uppercase">Speaker</p>
                <h3 className="font-space-mono text-2xl font-bold text-white tracking-wide">Manas Tiwari</h3>
                <div className="relative w-24 h-5 mt-2">
                  <Image src="/microsoft.png" alt="Microsoft" fill className="object-contain object-left" />
                </div>
              </div>
              <p className="font-space-mono text-white/60 text-sm leading-relaxed max-w-xl">
                An exceptional competitive programmer with a 5-Star rating on CodeChef and Candidate Master rank on Codeforces, now building at Microsoft.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                {["5★ CodeChef", "Candidate Master · CF"].map((tag) => (
                  <span key={tag} className="font-space-mono text-xs text-[#D2F65A] border border-[#D2F65A]/30 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
