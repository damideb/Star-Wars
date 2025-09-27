"use client";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ open = false, onClose }: SidebarProps) {
  const pathname = usePathname();

  const sideContent = [
    { title: "Overview", Link: "/overview", icon: <TfiLayoutGrid2Alt /> },
    {
      title: "Starships",
      Link: "/starships",
      icon: (
        <span className=" bg-[#A9C1FF] block w-[17px] h-[16px] rounded-[5px]" />
      ),
    },
    {
      title: "People",
      Link: "/people",
      icon: (
        <span className=" bg-[#FFA9EC] block w-[17px] h-[16px] rounded-[5px]" />
      ),
    },
    {
      title: "Species",
      Link: "/species",
      icon: (
        <span className=" bg-[#FDFFA9] block w-[17px] h-[16px] rounded-[5px]" />
      ),
    },
  ];

  return (
    <>
      <div className="hidden md:block md:w-60 lg:w-68 flex-shrink-0 ">
        <div className=" fixed p-2 z-50 md:w-60 lg:w-68 top-0 h-full bg-primary text-white">
          <div className="py-10">
            <Image
              src="/logo.png"
              alt="starwars-logo"
              width={107}
              height={46}
              className="w-20 md:w-[107px] mx-auto"
            />
          </div>
          <div className=" px-3  font-medium space-y-4   text-blue my-3">
            {sideContent.map((item, index) => (
              <div
                key={index}
                className={`${
                  pathname.includes(item.Link) ? " bg-blue500  " : "hover:text-blue500"
                } ${item.title==='Overview' &&'mb-14'} transition-all font-semibold rounded  py-3 duration-500`}
              >
                <Link
                  href={item.Link}
                  className="px-10  flex gap-4 items-center"
                >
                  <span className=" inline-block pr-2">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <aside className="relative w-64 h-full bg-primary text-white p-4">
          <button className="absolute top-4 right-4" onClick={onClose}>
            <IoClose />
          </button>
          <div className="py-6">
            <Image
              src="/logo.png"
              alt="starwars-logo"
              width={107}
              height={46}
              className="w-20 mx-auto"
            />
          </div>
          <nav className="mt-6 space-y-3">
            {sideContent.map((item, index) => (
              <div
                key={index}
                className={`${pathname.includes(item.Link) ? " bg-blue500 text-blue " : ""} rounded`}
              >
                <Link
                  href={item.Link}
                  onClick={onClose}
                  className="block px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-block">{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                </Link>
              </div>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
