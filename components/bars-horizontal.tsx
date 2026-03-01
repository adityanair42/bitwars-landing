import Image from "next/image"

export default function BarsHorizontal() {
  return (
    <div className="relative w-full h-full">
        <Image
          src="/bars-horizontal.svg"
          alt="vit-logo"
          fill
          className="object-contain"
          priority
        />
    </div>
  )
}