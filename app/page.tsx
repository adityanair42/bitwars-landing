import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="relative aspect-4973/7038 w-full bg-[#151415] text-white">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/background.svg" 
          alt="Blueprint background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
