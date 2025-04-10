import CustomIcon from "@/components/custom-icon";
import { SidebarProps } from "@/types/sidebarTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navlink({ icon, link, title }: SidebarProps) {
  const pathname = usePathname();
  if (!link) {
    return (
      <div className="w-full h-[32px] flex items-center gap-[10px] text-white rounded-md hover:bg-[#A93636] px-[15px] py-[20px]">
        <CustomIcon SvgIcon={icon} size={20} />
        <span className={`leading-[24px] text-sm text-white`}>{title}</span>
      </div>
    );
  }
  return (
    <Link
      href={link}
      className={`w-full h-[32px] flex items-center gap-[10px] text-white ${
        pathname.includes(link) ? "bg-[#A93636]" : ""
      } rounded-md hover:bg-[#A93636] px-[15px] py-[20px] `}
    >
      <CustomIcon SvgIcon={icon} size={20} />
      <span className={`leading-[24px] text-sm text-white`}>{title}</span>
    </Link>
  );
}
