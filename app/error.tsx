"use client"; 

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <div className="rounded-2xl bg-white shadow-lg p-8 max-w-md text-center border border-gray-200">
        <h2 className="text-2xl font-semibold text-red-600 mb-3">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-6">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-2 rounded-lg bg-red-500 text-white font-medium shadow hover:bg-red-600 transition"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
