import Image from "next/image"

export default function BarsVertical() {
  return (
    <div className="h-[40%] w-[2.1%]">
        <Image
          src="/bars.svg"
          alt="vit-logo"
          fill
          priority
        />
    </div>
  )
}