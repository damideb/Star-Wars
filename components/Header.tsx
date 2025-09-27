"use client";
import { FaRegBell } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import Image from "next/image";
import { IoChevronBackOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";

interface HeaderProps {
  onMenu?: () => void;
}

export default function Header({ onMenu }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const pathArr = pathname.split("/").filter(Boolean);
  const showBack = pathArr.length > 1;
  return (
    <div className="  flex justify-between lg:px-10 mb-10  drop-shadow items-center z-50 bg-white  p-3 h-[70px]  w-full">
      <button className="md:hidden mr-5" onClick={onMenu} aria-label="Open menu">
        <CiMenuBurger />
      </button>
      {showBack && (
        <button
          onClick={() => router.back()}
          className=" text-muted text-sm sm:text-base flex gap-1 sm:gap-2 items-center"
        >
          <IoChevronBackOutline className=" " />
          Back
        </button>
      )}

      <div className="flex  justify-end flex-1 gap-2 md:gap-10 items-center">
        <button>
          <FaRegBell width={20} height={20} />
        </button>
        <div className=" border-l px-2 md:px-7 border-gray-200 flex gap-5 items-center">
          <Image
            src="/account.svg"
            alt="account-logo"
            width={30}
            height={30}
            className="w-[20px] sm:w-[30px] mx-auto"
          />
          <h2 className=" text-sm sm:text-base">John Doe</h2>
        </div>
        <button>
          {" "}
          <IoIosMore />
        </button>
      </div>
    </div>
  );
}
