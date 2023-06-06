import Image from "next/image";
import LogoBlack from "../../public/LogoBlack.png";

export default function Footer() {
  return (
    // <div className="grid"></div>
    <div className="grid grid-cols-2 p-24 bg-[#C9C9C9]">
      <div className="border-r border-[#010C23] border-opacity-10 flex items-center justify-end pr-24">010C23</div>
      <div className="pl-24 space-y-6">
        <Image src={LogoBlack} alt="Logo" />
        <div className="text-black font-semibold leading-9 text-2xl">Tristique senectus et netus <br /> et malesuada fames</div>
        <div className="text-black font-light leading-7 text-[0.938rem] text-opacity-90">©2023 Logoipsum. All rights reserved</div>
      </div>
    </div>
  );
}
