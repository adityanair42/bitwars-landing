import Image from "next/image";
import Navbar from "@/components/navbar";
import BitwarsHeading from "@/components/bitwarsHeading";



//height-7038
//width-4973

export default function Home() {
  return (
    <div className="relative aspect-[4973/7038] w-full bg-[#151415] text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.svg"
          alt="Blueprint background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 mt-[3%] mx-[5.5%] border">
          <Navbar />
        </div>
        <div className="relative z-10 mt-[7.74%] ml-[2.1%] border-b h-[4%] w-[88.9%] flex">
          <div className="font-space-mono font-normal text-[1.93vw] leading-none tracking-[-0.09em]">
            DECIMAL POINTS ONES ZEROES AND <br /> MEMORY ALLOCATIONS
          </div>
          <div className="font-space-mono font-normal text-[1.93vw] leading-none tracking-[-0.09em] ml-[12.8%]">
            DEVELOPERS AND <br />DATABASES
          </div>
        </div>
        <div className="mt-[3.9%] ml-[2.1%] w-[87.79%] h-[8.92%] border">
          <BitwarsHeading />
        </div>
      </div>
    </div>
  );
}
