import Image from "next/image";
import Navbar from "@/components/navbar";
import BitwarsHeading from "@/components/bitwarsHeading";
import Calender from "@/components/calender";
import Location from "@/components/location";
import Card from "@/components/card";
import BarsVertical from "@/components/bars-vertical";
import BarsHorizontal from "@/components/bars-horizontal";
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
        <div className="relative z-10 mt-[2.7%] mx-[5.5%]">
          <Navbar />
        </div>
        <div className="relative z-10 mt-[7.74%] ml-[2.1%] border-b h-[3.5%] w-[88.9%] flex">
          <div className="font-space-mono font-normal text-[1.93vw] leading-none tracking-[-0.09em]">
            DECIMAL POINTS ONES ZEROES AND <br /> MEMORY ALLOCATIONS
          </div>
          <div className="font-space-mono font-normal text-[1.93vw] leading-none tracking-[-0.09em] ml-[12.8%]">
            DEVELOPERS AND <br />DATABASES
          </div>
        </div>
        <div className="mt-[3.9%] ml-[2.1%] w-[87.79%] h-[8.92%] ">
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
        <div className="ml-[2.1%] mt-[8.4%] h-[2.7%] border-b flex justify-between w-[88%]">
          <div className="font-space-mono font-bold text-[1.9vw] tracking-[-0.01em]">
            SOLUTION SPROUTING
          </div>
          <div className="font-space-mono font-bold text-[1.9vw] tracking-[-0.01em] text-right">
            IDEATE
            <div className="w-[20vw] h-[3vw] -translate-y-[1.3vw]">
              <BarsHorizontal />
              </div>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-[4%]">
          <div className="relative col-span-1 flex">
           <div className=" w-[60%]">
             <Card />
            <div className="mt-[3.2%] ml-[2%] font-space-mono font-bold text-[1.5vw] tracking-[-0.01em] text-[#D2F65A]">
              Student Coordinator
            </div>
            <div className="ml-[2%] mt-[2%] flex justify-start font-mono text-[1vw] tracking-[-0.01em]">
              <div>
                Aditya Jyoti (Chairperson)          <br />
                Aryan Kumar (Vice Chairperson)     <br /> 
                Shruthi Reddy (General Secretary)   <br />
                Reuben Philip (Treasurer)           
              </div>
              <div className="ml-[3%]">
                +91 9831284004 <br />
                +91 9663972493 <br />
                +91 7845820122 <br />
                +91 6238169741
              </div>
            </div>

            <div className="mt-[3.2%] ml-[2%] font-space-mono font-bold text-[1.5vw] tracking-[-0.01em] text-[#D2F65A]">
              Faculty Coordinator
            </div>
            <div className="ml-[2%] mt-[2%] flex justify-start ">
              <div className="font-mono text-[1vw] tracking-[-0.01em]">
                Dr Abraham Sudharson Ponraj          <br />
                Dr Uma Devi S     <br /> 
              </div>
            </div>
           </div>
           <div className="relative w-[10%]">
              <BarsVertical />
           </div>
          </div>
          <div className="col-span-1 border">
            <div className="mt-[6.3%]">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
