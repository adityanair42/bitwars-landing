import Image from "next/image"

export default function Location() {
  return (
    <div className="relative w-[2.7%] aspect-square">
      <Image
        src="/location-tick.svg"
        alt="location"
        fill
        priority
      />
    </div>
  )
}