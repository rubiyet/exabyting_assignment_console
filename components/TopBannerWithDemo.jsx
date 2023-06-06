import Image from "next/image";
import Banner from "../public/TopBanner.png";
import Button from "./common/atoms/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

export default function TopBannerWithDemo() {
  return (
    <div className="grid grid-cols-2 font-roboto">
      <div>
        <div className="text-[#181F1B] text-9xl mt-[7.5rem] ml-[7.3rem] select-none leading-[9rem]">
          Lore <span className="font-extrabold">ipsum.</span>
          <br />
          Dolor <span className="font-extrabold">sit.</span>
        </div>

        <div className="text-[#181F1B] text-opacity-70 text-[1.5rem] font-medium mt-[2.625rem] ml-[7.5rem] leading-9	tracking-wide">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          <br />
          cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis
          <br />
          unde omnis iste natus error.
        </div>

        <div className="flex mt-[3rem] ml-[6rem] space-x-4">
          <Button className="bg-white text-black border border-black px-[2.5rem]">
            Viverra orci sagittis
          </Button>
          <Button className="bg-[#58BF73] text-white border border-[#58BF73] space-x-3 px-[3.25rem]">
          <FontAwesomeIcon icon={faCirclePlay} />
          <span>Get a demo</span>
        </Button>
        </div>
      </div>
      <Image src={Banner} alt="banner" />
    </div>
  );
}
