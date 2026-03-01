import Image from "next/image";

export default function Card() {
  return (
    <div className="relative bg-[#2C3020] rounded-2xl p-6 -translate-x-3 w-[320px] pl-10 flex flex-col gap-4">
      <div className="relative w-[140px] h-[140px] rounded-full overflow-hidden">
        <Image
          src="/speaker.png"
          alt="Speaker"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <p className="text-[#d2f65a] font-inter text-sm tracking-normal">
            SPEAKER:
          </p>
          <p className="text-[#d2f65a] font-inter font-bold text-xl tracking-wide">
            MANAS TIWARI
          </p>
        </div>
        <hr className="border-gray-500" />

        <div className="flex flex-col gap-1">
          <p className="text-white font-inter text-sm">SDE</p>
          <div className="flex items-center gap-2">
            <div className="relative w-[27px] h-[27px] pt-5">
              <Image
                src="/microsoft.png"
                alt="Microsoft"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-white font-inter text-md tracking-wide">
              Microsoft
            </span>
          </div>
        </div>

        <p className="text-white font-inter leading-6 mt-4">
          5 Stars at CodeChef | <br /> Candidate Master <br /> @Codeforces
        </p>
      </div>
    </div>
  );
}