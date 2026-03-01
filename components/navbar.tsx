import Image from "next/image";

export default function Navbar() {
  return (
    <div className="border-b border-gray-700 top-0 fixed w-screen flex justify-between min-h-25 items-center text-xl">
      <div className="ml-20">
        <img src="/ieee-logo.svg" alt="" />
      </div>
      <div className="flex mr-30 tracking-wider">
        <div className="mx-10">PREVIOUS EVENTS</div>
        <div className="mx-10">CONTACT</div>
        <div className="mx-10">REGISTER</div>
      </div>
    </div>
  )
}