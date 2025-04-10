"use client";

import CustomIcon from "@/components/custom-icon";
import { homeDatas } from "@/constants/homeData";
import { homeDataProps } from "@/types/homeDataTypes";
import categoryIcon from "@/assets/icons/category.svg";
import profileIcon from "@/assets/icons/profile2.svg";
import arrowRight from "@/assets/icons/arrow-right.svg";
import arrowDown from "@/assets/icons/arrow-down-colored.svg";
import arrowDownPlain from "@/assets/icons/arrow-down-plain.svg";
import searchIcon from "@/assets/icons/search.svg";
import refreshIcon from "@/assets/icons/refresh.svg";
import downloadIcon from "@/assets/icons/download.svg";
import { useState } from "react";
import { Select } from "antd";
import TableData from "@/components/table/tableData";
import { useDebounce } from "@/hooks";
import { useRouter } from "next/navigation";

interface HomeDetailProps {
  params: {
    title: string;
  };
}

export default function HomeDetail({ params }: HomeDetailProps) {
  const { title } = params;
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearch = useDebounce(searchQuery, 300);
  const router = useRouter();
  const homeData: homeDataProps | undefined = homeDatas.find(
    (data) => data.route === title
  );

  const filteredData = homeData?.tableData?.filter((item) => {
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "All" ||
      item.customerCateory === selectedCategory;

    const matchesSearch =
      !debouncedSearch ||
      item.customerName.toLowerCase().includes(debouncedSearch.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (!homeData) {
    return <div>Home data not found</div>;
  }

  return (
    <div className="p-4 bg-[#f4f4f4] flex flex-col gap-4">
      <div className="">
        <h1 className="text-3xl font-bold">{homeData.title}</h1>

        <div className="flex justify-start items-center gap-2 pt-2">
          <h1
            onClick={() => {
              router.back();
            }}
            className="flex justify-start items-center gap-1 cursor-pointer text-[#8E8E8E]"
          >
            <CustomIcon SvgIcon={categoryIcon} size={20} />
            Dashboard
          </h1>
          <CustomIcon SvgIcon={arrowRight} size={20} />
          <h1 className="flex justify-start items-center gap-1 text-black">
            <CustomIcon SvgIcon={profileIcon} size={20} />
            {homeData.title}
          </h1>
        </div>
      </div>

      <div className="border-[#E8E8E8] boder-b w-full flex justify-start items-center pt-6 gap-5 border-b pb-1.5">
        <h1 className="text-[#8E8E8E] text-base cursor-pointer hover:text-black">
          Individual
        </h1>
        <h1 className="text-[#8E8E8E] text-base cursor-pointer  hover:text-black">
          Corporate
        </h1>
      </div>

      <div className="bg-[#FFFFFF] p-4 rounded-md">
        <div className="flex items-center justify-between border-b border-[#E8E8E8] pb-8">
          <div className="flex justify-between items-center w-[40%]">
            <div className="bg-[#F6F6F6] shadow-[#0000000D] flex justify-center items-center p-1 rounded-lg">
              <h1
                onClick={() => setIsActive(true)}
                className={`bg-[#FFFFFF] rounded-lg px-[12px] py-[8px] text-[#A93636] cursor-pointer ${
                  isActive
                    ? "bg-[#FFFFFF] text-[#A93636]"
                    : "bg-transparent text-black"
                }`}
              >
                All Records
              </h1>
              <h1
                onClick={() => setIsActive(false)}
                className={`rounded-lg px-[12px] py-[8px] text-center cursor-pointer ${
                  !isActive
                    ? "bg-[#FFFFFF] text-[#A93636]"
                    : "text-black bg-transparent"
                }`}
              >
                Request
              </h1>
            </div>

            <div className="flex justify-start items-center gap-4">
              <div className="w-[2px] h-[50px] bg-[#E8E8E8]"></div>
              <div className="text-center font-medium">
                <h1 className="text-xs hover:text-[#A93636] text-center font-medium cursor-pointer">
                  All
                </h1>
                <h1 className="text-2xl font-semibold">{homeData.all}</h1>
              </div>
              <div className="w-[2px] h-[50px] bg-[#E8E8E8]"></div>

              <div className="text-center font-medium">
                <h1 className="text-xs hover:text-[#A93636] text-center font-medium cursor-pointer">
                  Active
                </h1>
                <h1 className="text-2xl font-semibold">{homeData.active}</h1>
              </div>
              <div className="w-[2px] h-[50px] bg-[#E8E8E8]"></div>

              <div className="font-medium">
                <h1 className="text-xs hover:text-[#A93636] cursor-pointer">
                  Liquidated
                </h1>
                <h1 className="text-2xl font-semibold">
                  {homeData.liquidated}
                </h1>
              </div>
            </div>
          </div>

          <button className="flex justify-start items-center gap-3 border-[0.5px] border-[#A93636] rounded-full p-2 px-4 text-sm">
            Created by System-wide <CustomIcon SvgIcon={arrowDown} size={18} />
          </button>
        </div>

        <div className="pt-5 flex justify-between items-center gap-4">
          <div className="w-full flex justify-start items-center gap-3 ]">
            <div className="bg-[#F4F4F4] rounded-lg py-1 w-[23%]">
              <Select
                defaultValue={"Customer Category"}
                variant="borderless"
                className="flex justify-between items-center"
                suffixIcon={<CustomIcon SvgIcon={arrowDownPlain} size={18} />}
                onChange={(value) => setSelectedCategory(value)}
                options={[
                  {
                    value: "All",
                    label: "All",
                  },
                  {
                    value: "Individual",
                    label: "Individual",
                  },
                  {
                    value: "Corporate",
                    label: "Corporate",
                  },
                ]}
              />
            </div>

            <div className="relative w-[27%]">
              <input
                type="text"
                placeholder="Search customer name"
                className="border rounded-lg outline-none pl-8 p-2 w-full placeholder:text-sm"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
              <div className="absolute top-3 left-2">
                <CustomIcon SvgIcon={searchIcon} size={18} />
              </div>
            </div>
          </div>
          <div className="w-[45%] flex justify-between items-center">
            <button className="text-[#A93636] text-sm border rounded-lg bg-[#A9363612] flex justify-center items-center gap-3 w-[45%] p-2 border-none font-medium">
              <CustomIcon SvgIcon={refreshIcon} size={18} />
              Refresh Table
            </button>
            <button className="text-[#A93636] text-sm border rounded-lg bg-[#A9363612] flex justify-center items-center gap-3 w-[45%] p-2 border-none font-medium">
              <CustomIcon SvgIcon={downloadIcon} size={18} />
              Download Table
            </button>
          </div>
        </div>
        <div className="pt-10">
          <TableData tableData={filteredData ?? []} />
        </div>
      </div>
    </div>
  );
}
