"use client";

import { sidebar } from "@/constants/sidebar";
import CustomIcon from "../custom-icon";
import Navlink from "./navlink";
import Link from "next/link";
import logo from "@/assets/icons/logo.svg";
import cautionIcon from "@/assets/icons/caution.svg";
import logOutIcon from "@/assets/icons/log-out.svg";

const SideBar = () => {
  return (
    <div className="w-[21%] bg-[#000000] h-dvh flex flex-col justify-between items-center pb-5">
      <div>
        <Link
          href={"/"}
          className="p-3 h-[100px] flex items-center overflow-hidden"
        >
          <CustomIcon SvgIcon={logo} size={135} />
        </Link>

        <div className="px-[10px] flex-grow mx-auto flex flex-col gap-1.5 my-5 w-full">
          {sidebar.map((link, i) => {
            return (
              <Navlink
                icon={link.icon}
                link={link.link}
                title={link.title}
                key={i}
              />
            );
          })}
        </div>
      </div>

      {/* Logout section */}
      <div className="px-[12px]  mx-auto flex flex-col gap-1.5 my-1.5 w-full">
        <h1 className="text-white cursor-pointer flex gap-4 items-center w-full hover:bg-[#A93636] px-[12px] py-[10px] rounded-[4px]">
          <CustomIcon SvgIcon={cautionIcon} size={20} />
          IBM
        </h1>
        <h1 className="text-white cursor-pointer flex gap-4 items-center w-full hover:bg-[#A93636] px-[12px] py-[10px] rounded-[4px]">
          <CustomIcon SvgIcon={logOutIcon} size={20} />
          Logout
        </h1>
      </div>
    </div>
  );
};

export default SideBar;
