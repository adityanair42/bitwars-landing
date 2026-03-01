import Image from "next/image"

export default function BitwarsHeading() {
  return (
    <div className="relative w-full h-full aspect-[4366/626]">
      <Image
        src="/BITWARS 3.0.svg"
        alt="vit-logo"
        fill
        priority
      />
    </div>
  )
}