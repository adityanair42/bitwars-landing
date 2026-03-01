import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="relative w-[11%] aspect-[491/191]">
        <Image
          src="/VIT.png"
          alt="vit-logo"
          fill
          priority
      />
      </div>
      <div className="relative w-[10%] aspect-[444/201]">
        <Image
          src="/ieee-logo.png"
          alt="vit-logo"
          fill
          priority
      />
      </div>
      <div className="relative w-[17%] aspect-[751/223]">
        <Image
          src="/swc.png"
          alt="vit-logo"
          fill
          priority
      />
      </div>
    </div>
  )
}