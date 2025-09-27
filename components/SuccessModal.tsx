"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface SuccessModalProps {
  isOpen: boolean;
  
}

export default function SuccessModal({ isOpen }: SuccessModalProps) {
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        router.push("/overview");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, router]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/10 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-[90%] mx-4 text-center shadow-xl">
        <div className="flex justify-center mb-4">
          <IoMdCheckmarkCircleOutline className="w-16 h-16 text-green-500" />
        </div>
        <h2 className="text-2xl font-semibold text-[#434854] mb-2">
          Login Successful!
        </h2>
        <p className="text-[#737373] mb-6">
          Welcome back! You will be redirected to your dashboard in a few
          seconds.
        </p>
        <div className="flex justify-center">
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
        <p className="text-sm text-[#737373] mt-4">
          Redirecting to overview...
        </p>
      </div>
    </div>
  );
}
