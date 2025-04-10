"use client";

import searchIcon from "@/assets/icons/search.svg";
import CustomIcon from "../custom-icon";
import notification from "@/assets/icons/notification.svg";
import arrowDown from "@/assets/icons/arrow-down.svg";
import branchIcon from "@/assets/icons/branch.svg";
import customerIcon from "@/assets/icons/customer.svg";
import { Select } from "antd";
import { useSearch } from "@/context/SearchContext";
import { getBusinessDate, getFormattedDate } from "@/utils/general";
import { format } from "date-fns";

const Header = () => {
  const { setSearchTerm } = useSearch();
  const currentDate = new Date();
  const businessDate = getBusinessDate(currentDate);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="h-[70px] bg-white border-b border-[#F0F0F0] w-full px-4 py-1 flex justify-between items-center">
      <div className="relative w-[24%]">
        <input
          type="text"
          onChange={handleSearchChange}
          placeholder="Search"
          className="border rounded-lg outline-none pl-8 p-2 w-full placeholder:text-sm"
        />
        <div className="absolute top-3 left-2">
          <CustomIcon SvgIcon={searchIcon} size={18} />
        </div>
      </div>

      <div className="flex justify-start items-center gap-3">
        <h1 className="text-sm text-[#1C1C1C]">
          {getFormattedDate(currentDate)}
        </h1>
        <div className="text-[#D2D2D2]">|</div>
        <h1 className="text-sm text-[#1C1C1C]">
          <span className="font-semibold"> Business Date: </span>{" "}
          {format(businessDate, "EEE, MMM dd, yyyy HH:mm")}
        </h1>
        <div className="cursor-pointer">
          <CustomIcon SvgIcon={notification} size={40} />
        </div>
        <div className="bg-[#F4F4F4] rounded-full py-1">
          <Select
            defaultValue={"Ikoyi Branch"}
            variant="borderless"
            optionFilterProp="label"
            suffixIcon={<CustomIcon SvgIcon={arrowDown} size={18} />}
            options={[
              {
                value: "Ikoyi Branch",
                label: (
                  <div className="flex items-center gap-2">
                    <CustomIcon SvgIcon={branchIcon} size={20} />
                    Ikoyi Branch
                  </div>
                ),
              },
              {
                value: "Festac Branch",
                label: (
                  <div className="flex items-center gap-2">
                    <CustomIcon SvgIcon={branchIcon} size={20} />
                    Festac Branch
                  </div>
                ),
              },
            ]}
          />
        </div>
        <div className="bg-[#F4F4F4] rounded-full py-1">
          <Select
            defaultValue={"Eric Alawoya"}
            variant="borderless"
            optionFilterProp="label"
            suffixIcon={<CustomIcon SvgIcon={arrowDown} size={18} />}
            options={[
              {
                value: "Ikoyi Branch",
                label: (
                  <div className="flex items-center gap-2">
                    <CustomIcon SvgIcon={customerIcon} size={18} />
                    <h1 className="text-sm">Eric Alawoya</h1>
                  </div>
                ),
              },
              {
                value: "Festac Branch",
                label: (
                  <div className="flex items-center gap-2">
                    <CustomIcon SvgIcon={customerIcon} size={18} />
                    <h1 className="text-sm">John Doe</h1>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
