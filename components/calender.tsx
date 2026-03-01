import Image from "next/image"

export default function Calender() {
  return (
    <div className="relative w-[2.7%] aspect-square">
      <Image
        src="/calendar-tick.svg"
        alt="calender"
        fill
        priority
      />
    </div>
  )
}