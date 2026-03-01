import Image from "next/image"

export default function Monolab() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/monolab.png"
        alt="monolab"
        fill
        className="object-contain object-top"
        priority
      />
    </div>
  )
}