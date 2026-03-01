import Reveal from "@/components/reveal"

const tiers = [
  { place: "1st", label: "Winner", amount: "₹20,000" },
  { place: "2nd", label: "Runner Up", amount: "₹12,000" },
  { place: "3rd", label: "Second Runner Up ", amount: "₹8,000" },
]

export default function PrizeSection() {
  return (
    <section id="prize" className="dot-bg bg-[#151415] py-28 px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#D2F65A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-space-mono text-xs text-[#D2F65A] tracking-[0.3em] mb-4 uppercase">Winnings</p>
          <h2 className="font-space-mono text-3xl md:text-4xl font-bold text-white tracking-tight mb-16 border-b border-white/10 pb-6">
            Cash Prize Pool
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {tiers.map((tier, i) => (
            <Reveal key={tier.place} delay={i * 100} className="h-full">
              <div className={`p-10 flex flex-col gap-3 h-full ${
                i === 0 ? "bg-[#1a1f10]" : "bg-[#0f0f0f]"
              }`}>
                <span className={`font-space-mono text-xs tracking-widest ${
                  i === 0 ? "text-[#D2F65A]" : "text-white/30"
                }`}>{tier.place} Place</span>
                <p className="font-space-mono text-white/50 text-sm">{tier.label}</p>
                <p className={`font-space-mono font-bold ${
                  i === 0 ? "text-4xl text-[#D2F65A]" : "text-3xl text-white"
                } tracking-tight mt-2`}>
                  {tier.amount}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
