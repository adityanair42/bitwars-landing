import Image from "next/image"

export default function Prize() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/prize.png"
        alt="vit-logo"
        fill
        priority
      />
    </div>
  )
}