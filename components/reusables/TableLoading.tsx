"use client";

interface TableLoadingProps {
  rows?: number;
  columns?: number;
  className?: string;
}

export default function TableLoading({
  rows = 5,
  columns = 4,
}: TableLoadingProps) {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {Array.from({ length: columns }).map((_, index) => (
                <th key={index} className="px-6 py-3 text-left">
                  <div className="h-4 bg-gray-300 rounded animate-pulse" />
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: columns }).map((_, colIndex) => (
                  <td key={colIndex} className="px-6 py-4">
                    <div
                      className="h-4 bg-gray-200 rounded animate-pulse"
                      style={{
                        animationDelay: `${(rowIndex * columns + colIndex) * 100}ms`,
                      }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
