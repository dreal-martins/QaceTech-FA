import { useState, useMemo, useEffect } from "react";

import { flexRender } from "@tanstack/react-table";
import { UseTableProps } from "@/types/table";
import { useTable } from "@/hooks";

const CustomTable = <T,>({
  columns,
  initialData,
  addRowStyle,
}: UseTableProps<T>) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [tableData, setTableData] = useState<T[]>([]);

  useEffect(() => {
    setPageIndex(0);
  }, [initialData]);

  const paginatedData = useMemo(() => {
    const start = pageIndex * pageSize;
    const end = start + pageSize;
    return initialData.slice(start, end);
  }, [initialData, pageIndex, pageSize]);

  const { table } = useTable({
    columns,
    initialData: paginatedData,
  });

  const totalPages = Math.ceil(initialData.length / pageSize);

  return (
    <div className="max-w-full rounded-lg overflow-hidden tableShadow">
      <div className="w-full rounded-lg">
        <table className="border-spacing-y-table w-full table-auto">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <th
                    key={header.id}
                    className={` text-black font-bold text-base tracking-[-0.06px] py-4 px-4 text-left 
                    ${index === 0 ? "rounded-tl-lg" : ""} 
                    ${
                      index === headerGroup.headers.length - 1
                        ? "rounded-tr-lg"
                        : ""
                    }`}
                    style={{
                      position: "sticky",
                      top: 0,
                      zIndex: 1,
                      backgroundColor: "transparent",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {paginatedData.length > 0 ? (
              table.getRowModel().rows.map((row, index) => (
                <tr
                  key={row.id}
                  className={`text-[#1F2734] text-[0.85rem] border-b-[1.2px] border-[#FAF8F7] ${
                    index % 2 === 0 ? "bg-[#FAF8F7]" : "bg-[#FFFFFF]"
                  }`}
                  style={{ ...addRowStyle?.(row.original) }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={`py-4 px-4 text-left ${
                        cell.column.id === "actions"
                          ? "sticky right-0 bg-white"
                          : ""
                      }`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={table.getHeaderGroups()[0].headers.length}>
                  <div className="text-center py-6 text-[#8C8C8C]">
                    No Data Available
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between p-4 bg-white">
          <div className="flex items-center space-x-2">
            <span className="text-sm">Display rows</span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPageIndex(0);
              }}
              className="border rounded px-2 py-1 outline-none text-sm text-black"
            >
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
              disabled={pageIndex === 0}
              className={`px-3 py-1.5 text-sm rounded ${
                pageIndex === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#A93636] text-white"
              }`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setPageIndex(index)}
                className={`px-3 py-1.5 text-sm rounded  ${
                  pageIndex === index ? "bg-[#A93636] text-white" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setPageIndex((prev) => Math.min(prev + 1, totalPages - 1))
              }
              disabled={pageIndex >= totalPages - 1}
              className={`px-3 py-1.5 text-sm rounded ${
                pageIndex >= totalPages - 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#A93636] text-white"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
