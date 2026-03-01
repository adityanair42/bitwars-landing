import Image from "next/image";
import Navbar from "@/components/navbar";
import BitwarsHeading from "@/components/bitwarsHeading";
import Calender from "@/components/calender";
import Location from "@/components/location";


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
        <div className="w-[54%] mt-[6.7%] h-[3.8%] border-t ml-[2.1%] font-space-mono font-normal text-[2.9vw] tracking-[-0.09em]">
          Competetive Programming + Hackathon 
        </div>
        <div className="mt-[1.3%] ml-[2.2%] flex ">
          <Calender />
          <div className="font-space-mono font-normal text-[2.2vw] tracking-[-0.07em] pl-2">
            7-8 March 2026
          </div>
        </div>
        <div className="mt-[1.2vw] ml-[2.2%] flex  h-[11.1vh]">
          <Location />
          <div className=" pl-2">
            <div className="font-space-mono font-normal text-[2.2vw] tracking-[-0.07em]">
              MG Auditorium
            </div>
            <div className="font-space-mono font-normal text-[1.3vw] tracking-[-0.07em]">
              VIT Chennai
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
