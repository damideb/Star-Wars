"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface TableProps<T extends Record<string, string>> {
  headers: { value: keyof T; title: string }[];
  items: T[];
  route:string
}

export default function Table<T extends Record<string, string>>({
  headers,
  items,
  route
}: TableProps<T>) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const isAllSelected = selectedIds.length === items.length && items.length > 0;

  const router= useRouter()
  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(items.map((c) => c.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };
  const handleRowClick=(id:string)=>{
    router.push(`/${route}/${id}`)
  }
  return (
    <div className="overflow-x-auto  border border-[#A4A7B766] rounded mt-7">
      <table className="w-full ">
        <thead className="">
          <tr className="border-b border-[#E5E5E5]">
            <th className="px-4  text-left py-5 font-medium">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={toggleSelectAll}
              />
            </th>
            {headers.map((header) => (
              <th
                key={String(header.value)}
                className="text-left text-nowrap px-2 py-5 font-medium text-muted "
              >
                {header.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => handleRowClick(item.id)}
                className="border-b cursor-pointer transition-all duration-500 hover:bg-white hover:shadow-md hover:scale-y-[1.03]  border-[#E5E5E5] "
              >
                <td className="px-4 py-5">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(item.id)}
                    onClick={(e) => e.stopPropagation()}
                    onChange={() => {
                      toggleSelect(item.id);
                    }}
                  />
                </td>
                {headers.map((header) => (
                  <td
                    key={String(header.value)}
                    className="px-4 py-5 capitalize  text-sm text-muted-gray font-medium"
                  >
                    {item[header.value]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={headers.length}
                className="px-4 py-6 text-center text-gray-500 text-sm"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
