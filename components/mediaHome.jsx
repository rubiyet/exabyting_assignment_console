import Media from "../public/Media.png";
import Image from "next/image";
import Button from "./common/atoms/Button";

export default function MediaHome() {
  return (
    <>
      <div className="px-20 grid grid-cols-2 py-[10rem]">
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-col items-start justify-center font-roboto text-[3.2rem] leading-[4.0625rem] text-[#181F1B] font-medium">
            <span>Sed ut perspiciatis unde omnis</span>
            <span>iste natus error. <span className="font-black">Try Out!</span></span>
          </div>
          <div className="text-[#181F1B] text-opacity-70 text-[1.5rem] font-medium mt-[2.625rem] leading-9	tracking-wide">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          <br />
          cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis
          <br />
          unde omnis iste natus error.
        </div>
        <div className=" mt-[3rem]">
          <Button className="bg-[#58BF73] text-white border border-[#58BF73] space-x-3 px-[2rem]">
          <span>Try Out Now!</span>
        </Button>
        </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={Media} alt="Media" />
        </div>
      </div>
    </>
  );
}
