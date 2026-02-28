import Image from "next/image";

export default function Navbar() {
  return (
    <div className="border-b border-white top-0 fixed w-screen flex justify-between min-h-18 items-center text-xl">
      <div className="ml-20">
        <img src="/ieee-logo.svg" alt="" />
      </div>
      <div className="flex mr-30">
        <div className="mx-10">Previous Events</div>
        <div className="mx-10">Contant</div>
        <div className="mx-10">Register</div>
      </div>
    </div>
  )
}