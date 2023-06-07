import Image from "next/image";
import LogoBlack from "../../public/LogoBlack.png";

export default function Footer() {
  return (
    // <div className="grid"></div>
    <div className="grid grid-cols-11 p-[6.5rem] bg-[#C9C9C9] select-none">
      <div className="col-span-6 border-r-2 border-[#010C23] border-opacity-10 flex items-start justify-end pr-24 space-x-20">
        <div className="flex flex-col">
          <span className="font-semibold text-lg leading-[1.625rem] tracking-[0.1rem] pb-[1.313rem]">
            Products
          </span>
          <span className="font-normal text-lg leading-6 tracking-[0.038rem] opacity-70 pt-[0.625rem]">Features</span>
          <span className="font-normal text-lg leading-6 tracking-[0.038rem] opacity-70 pt-[0.625rem]">Enterprice</span>
          <span className="font-normal text-lg leading-6 tracking-[0.038rem] opacity-70 pt-[0.625rem]">Innovation</span>
          <span className="font-normal text-lg leading-6 tracking-[0.038rem] opacity-70 pt-[0.625rem]">Offline</span>
        </div>
        <div className="flex flex-col">
          <span className=" font-semibold text-lg leading-[1.625rem] tracking-[0.1rem] pb-[1.313rem]">
            Company
          </span>
          <span className="font-normal text-lg leading-6 tracking-[0.038rem] opacity-70 pt-[0.625rem]">About</span>
          <span className="font-normal text-lg leading-6 tracking-[0.038rem] opacity-70 pt-[0.625rem]">Our Story</span>
          <span className="font-normal text-lg leading-6 tracking-[0.038rem] opacity-70 pt-[0.625rem]">Careers</span>
        </div>
        <div className="flex flex-col">
          <span className=" font-semibold text-lg leading-[1.625rem] tracking-[0.1rem] pb-[1.313rem]">
            Support
          </span>
          <span className="font-normal text-lg leading-6 tracking-[0.038rem] opacity-70 pt-[0.625rem]">Documentation</span>
          <span className="font-normal text-lg leading-6 tracking-[0.038rem] opacity-70 pt-[0.625rem]">Community</span>
          <span className="font-normal text-lg leading-6 tracking-[0.038rem] opacity-70 pt-[0.625rem]">Contact</span>
          <span className="font-normal text-lg leading-6 tracking-[0.038rem] opacity-70 pt-[0.625rem]">FAQ</span>
        </div>
      </div>
      <div className="col-span-5 pl-24 space-y-6">
        <Image src={LogoBlack} alt="Logo" />
        <div className="text-black font-semibold leading-9 text-2xl">
          Tristique senectus et netus <br /> et malesuada fames
        </div>
        <div className="text-black font-light leading-7 text-[0.938rem] text-opacity-90">
          ©2023 Logoipsum. All rights reserved
        </div>
      </div>
    </div>
  );
}
