import Reveal from "@/components/reveal"

const studentCoords = [
  { name: "Aditya Jyoti", role: "Chairperson", phone: "+91 9831284004" },
  { name: "Aryan Kumar", role: "Vice Chairperson", phone: "+91 9663972493" },
  { name: "Shruthi Reddy", role: "General Secretary", phone: "+91 7845820122" },
  { name: "Reuben Philip", role: "Treasurer", phone: "+91 6238169741" },
]

const facultyCoords = [
  { name: "Dr Abraham Sudharson Ponraj" },
  { name: "Dr Uma Devi S" },
]

export default function ContactSection() {
  return (
    <section id="team" className="dot-bg bg-[#151415] py-28 px-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D2F65A]/4 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-space-mono text-xs text-[#D2F65A] tracking-[0.3em] mb-4 uppercase">Get in touch</p>
          <h2 className="font-space-mono text-3xl md:text-4xl font-bold text-white tracking-tight mb-16 border-b border-white/10 pb-6">
            The Team
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16">
          <Reveal delay={100}>
            <p className="font-space-mono text-[#D2F65A] text-sm tracking-widest mb-6">STUDENT COORDINATORS</p>
            <div className="flex flex-col gap-5">
              {studentCoords.map((c) => (
                <div key={c.name} className="flex justify-between items-start border-b border-white/5 pb-5">
                  <div>
                    <p className="font-space-mono text-white text-sm">{c.name}</p>
                    <p className="font-space-mono text-white/40 text-xs mt-1">{c.role}</p>
                  </div>
                  <a
                    href={`tel:${c.phone}`}
                    className="font-space-mono text-white/60 text-sm hover:text-[#D2F65A] transition-colors"
                  >
                    {c.phone}
                  </a>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-space-mono text-[#D2F65A] text-sm tracking-widest mb-6">FACULTY COORDINATORS</p>
            <div className="flex flex-col gap-5">
              {facultyCoords.map((c) => (
                <div key={c.name} className="border-b border-white/5 pb-5">
                  <p className="font-space-mono text-white text-sm">{c.name}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="font-space-mono text-white/30 text-xs tracking-wide">
              IEEE Computer Society · VIT Chennai · BITWARS 3.0
            </p>
            <p className="font-space-mono text-white/30 text-xs">
              7–8 March 2026 · MG Auditorium
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
