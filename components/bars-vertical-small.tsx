import Image from "next/image"

export default function BarsVerticalSmall() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/vertical-bar-small.png"
        alt="bars vertical small"
        fill
        className="object-contain object-top"
        priority
      />
    </div>
  )
}