"use client";

import CustomIcon from "@/components/custom-icon";
import { homeDatas } from "@/constants/homeData";
import { useSearch } from "@/context/SearchContext";
import { homeDataProps } from "@/types/homeDataTypes";
import { truncateByChars } from "@/utils/general";
import Link from "next/link";

const Nintendo = () => {
  const { searchTerm } = useSearch();

  const filteredData = homeDatas.filter((homeData: homeDataProps) => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return (
      homeData.title.toLowerCase().includes(lowercasedSearchTerm) ||
      homeData.label.toLowerCase().includes(lowercasedSearchTerm)
    );
  });
  return (
    <div className="p-4 bg-[#f4f4f4] h-dvh">
      <h1 className="text-[#333333] text-2xl font-bold">
        Hello Eric Omotolani
      </h1>
      <h2 className="text-sm text-[#333333]">Welcome to your dashboard</h2>

      <div className="pt-6 flex justify-start items-center flex-wrap gap-3">
        {filteredData.map((homeData: homeDataProps) => {
          return (
            <Link
              key={homeData.title}
              href={`/nintendo/${homeData.route}`}
              passHref
            >
              <div className="bg-[#FFFFFF] rounded-lg p-4 flex flex-col justify-start items-start gap-1.5 w-[370px] hover:bg-[#F9E9E9] border border-[#FFFFFF] hover:border-[#A93636] cursor-pointer">
                <div className="w-[50px] h-[50px] rounded-full bg-[#E8E8E8] flex justify-center items-center">
                  <CustomIcon SvgIcon={homeData.icon} size={24} />
                </div>
                <h1 className="text-[#1C1C1C] font-bold text-base">
                  {homeData.title}
                </h1>
                <p className="text-sm text-[#606060]">
                  {truncateByChars(homeData.label, 115)}a
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nintendo;
