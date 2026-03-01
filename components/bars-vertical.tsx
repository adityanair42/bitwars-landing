import Image from "next/image"

export default function BarsVertical() {
  return (
    <div>
      <div className="relative w-full h-full ">
            <Image
              src="/bars.svg"
              alt="vit-logo"
              fill
              priority
            />
          </div>
    </div>
  )
}