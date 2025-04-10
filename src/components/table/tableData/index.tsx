import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import CustomTable from "..";
import CustomIcon from "@/components/custom-icon";
import filterIcon from "@/assets/icons/filter.svg";
import actionIcon from "@/assets/icons/action.svg";
import checkIcon from "@/assets/icons/check.svg";
import pauseIcon from "@/assets/icons/pause.svg";

export interface RowData {
  customerName: string;
  customerNumber: string;
  customerCateory: string;
  principal: string;
  userAliasTopData: string;
  userAliasBottomData: string;
  status: string;
  lastUpdated: string;
}

interface tableDataProps {
  tableData: RowData[];
}

export default function TableData({ tableData }: tableDataProps) {
  const columns: ColumnDef<RowData>[] = [
    {
      id: "customerName",
      accessorKey: "customerName",
      header: () => (
        <h1 className="text-[#606060] text-sm font-medium">Customer Name/ID</h1>
      ),
      cell: (info) => {
        const customerName = info.row.original.customerName;
        const customerNumber = info.row.original.customerNumber;
        return (
          <div className="">
            <h1>{customerName}</h1>
            <h1 className="text-[11px] text-[#777777]">{customerNumber}</h1>
          </div>
        );
      },
    },
    {
      id: "customerCateory",
      accessorKey: "customerCateory",
      header: () => (
        <h1 className="text-sm font-medium text-[#606060] flex justify-start items-center gap-2">
          Customer Category <CustomIcon SvgIcon={filterIcon} size={18} />
        </h1>
      ),
      cell: (info) => {
        return <span className="text-sm">{info.getValue() as string}</span>;
      },
    },
    {
      id: "principal",
      accessorKey: "principal",
      header: () => (
        <h1 className="text-sm font-medium text-[#606060]">Principal</h1>
      ),
      cell: (info) => {
        return <span className="text-sm">{info.getValue() as string}</span>;
      },
    },
    {
      id: "userAlias",
      accessorKey: "userAlias",
      header: () => (
        <h1 className="text-sm font-medium text-[#606060] flex justify-start items-center gap-2">
          User Alias <CustomIcon SvgIcon={filterIcon} size={18} />
        </h1>
      ),
      cell: (info) => {
        const userAliasTopData = info.row.original.userAliasTopData;
        const userAliasBottomData = info.row.original.userAliasBottomData;
        return (
          <div className="w-[25%]">
            <h1>{userAliasTopData}</h1>
            <h1 className="text-[11px] text-[#777777]">
              {userAliasBottomData}
            </h1>
          </div>
        );
      },
    },
    {
      id: "status",
      accessorKey: "status",
      header: () => (
        <h1 className="text-sm font-medium text-[#606060] flex justify-start items-center gap-2">
          Status <CustomIcon SvgIcon={filterIcon} size={18} />
        </h1>
      ),
      cell: (info) => {
        return (
          <button
            className={`text-sm text-[#344054] flex justify-start items-center gap-2 font-semibold px-3 py-1.5 rounded-full  ${
              (info.getValue() as string) === "Active"
                ? "bg-[#A9363612] border border-[#A93636]"
                : "bg-[#E8E8E8] border border-[#494949]"
            }`}
          >
            <CustomIcon
              SvgIcon={
                (info.getValue() as string) === "Active" ? checkIcon : pauseIcon
              }
              size={20}
            />
            {info.getValue() as string}
          </button>
        );
      },
    },
    {
      id: "lastUpdated",
      accessorKey: "lastUpdated",
      header: () => (
        <h1 className="text-sm font-medium text-[#606060] flex justify-start items-center gap-2">
          Last Updated <CustomIcon SvgIcon={filterIcon} size={18} />
        </h1>
      ),
      cell: (info) => {
        return (
          <span className="text-sm text-[#344054]">
            {info.getValue() as string}
          </span>
        );
      },
    },
    {
      id: "action",
      accessorKey: "action",
      header: () => (
        <span className="text-[#606060] text-sm font-medium">Action</span>
      ),
      cell: (info) => {
        return <CustomIcon SvgIcon={actionIcon} size={20} />;
      },
    },
  ];

  return <CustomTable columns={columns} initialData={tableData} />;
}
