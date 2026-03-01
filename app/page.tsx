import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-[#151415] text-white">
      <div>
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
