import Image from "next/image";
import CardIcon1 from "../public/cardIcon1.png";
import CardIcon2 from "../public/cardIcon2.png";
import CardIcon3 from "../public/cardIcon3.png";

export default function Cards() {
  return (
    <div className="flex items-center justify-center pb-[10rem] space-x-[1.563rem]">
      <div className="justify-center bg-white border-2 border-white border-opacity-20 shadow-lg px-10 flex flex-col rounded-[1.25rem] h-[26.438rem]">
        <Image src={CardIcon1} alt="logo" />
        <span className="pt-[4.063rem] font-semibold text-[1.375rem] leading-8">Lorem ipsum dolor sit amet, < br /> consectetur adipiscing elit</span>
        <div className="text-[#181F1B] text-opacity-70 text-[1.125rem] font-normal leading-7 pt-[1.063rem]">
          Convallis a cras semper auctor neque.<br />Fringilla est ullamcorper eget nulla<br />facilisi etiam dignissim, eiusmod tempor<br />incididunt ut labore
        </div>
        </div>
        <div className="justify-center bg-white border-2 border-white border-opacity-20 shadow-lg shadow-[#93c6a0] px-10 flex flex-col rounded-[1.25rem] h-[26.438rem]">
        <Image src={CardIcon2} alt="logo" />
        <span className="pt-[4.063rem] font-semibold text-[1.375rem] leading-8">Lorem ipsum dolor sit amet, < br /> consectetur adipiscing elit</span>
        <div className="text-[#181F1B] text-opacity-70 text-[1.125rem] font-normal leading-7 pt-[1.063rem]">
        Convallis a cras semper auctor neque.<br />Fringilla est ullamcorper eget nulla<br />facilisi etiam dignissim, eiusmod tempor<br />incididunt ut labore

        </div>
        </div>
        <div className="justify-center bg-white border-2 border-white border-opacity-20 shadow-lg px-10 flex flex-col rounded-[1.25rem] h-[26.438rem]">
        <Image src={CardIcon3} alt="logo" />
        <span className="pt-[4.063rem] font-semibold text-[1.375rem] leading-8">Lorem ipsum dolor sit amet, < br /> consectetur adipiscing elit</span>
        <div className="text-[#181F1B] text-opacity-70 text-[1.125rem] font-normal leading-7 pt-[1.063rem]">
        Convallis a cras semper auctor neque.<br />Fringilla est ullamcorper eget nulla<br />facilisi etiam dignissim, eiusmod tempor<br />incididunt ut labore
        </div>
        </div>
    </div>
  );
}