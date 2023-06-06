import Logo from "../../public/Logo.png";
import Image from "next/image";
import Button from "./atoms/Button";

export default function Header() {
  const navList = ["Product", "About Us", "Contacts"];
  return (
    <div className="h-[5.813rem] bg-white border-b flex items-center px-[7.5rem]">
      <div className="flex items-center space-x-28">
        <Image src={Logo} alt="logo" width={200} height={200} />
        <div className="flex ml-auto font-medium leading-4">
          {navList.map((item, index) => (
            <div
              key={index}
              className="text-[#181F1B] text-[1.25rem] ml-[2.5rem]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="ml-auto">
        <Button className="bg-[#58BF73] text-white border border-[#58BF73]">
          Get Started
        </Button>

        <Button className="bg-white text-[#181F1B] border border-[#181F1B]">
          Login
        </Button>
        </div>
    </div>
  );
}
