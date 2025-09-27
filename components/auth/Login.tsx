"use client";
import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { passwordCriteria } from "@/utils/utils";
import Input from "../reusables/Input";
import { renderPasswordStrength } from "@/utils/globalJSX";
import SuccessModal from "../SuccessModal";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState<{ email: boolean; password: boolean }>(
    {
      email: false,
      password: false,
    }
  );
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      return;
    }
    setShowSuccessModal(true);
  };

  const isPasswordValid = passwordCriteria.every((criterion) =>
    criterion.test(formData.password)
  );

  return (
    <>
      <div className="bg-white rounded-lg p-5 md:p-10 border h-fit border-gray-200 shadow w-[95%] max-w-130 mx-auto lg:w-120">
        <h1 className="text-xl md:text-2xl font-semibold mb-1 text-[#434854]">
          Login
        </h1>
        <p className="text-[#737373]">Kindly enter your details to log in</p>

        <form onSubmit={handleLogin} className="flex flex-col mt-6 gap-5">
          <Input
            id="email"
            name="email"
            type="email"
            label="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            error={
              touched.email && !validateEmail(formData.email)
                ? "Incorrect email format"
                : undefined
            }
            required
          />

          <Input
            id="password"
            name="password"
            type="password"
            label="Password"
            value={formData.password}
            onChange={handleInputChange}
            onBlur={handleBlur}
            error={
              touched.password && !isPasswordValid
                ? "Password does not meet all requirements"
                : undefined
            }
            required
          />

          {formData.password && (
            <div className="grid grid-cols-2 space-y-1">
              {renderPasswordStrength(formData.password)}
            </div>
          )}

          <button
            disabled={!isPasswordValid || !validateEmail(formData.email)}
            className="disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer bg-blue500 rounded-[6px] font-medium mt-4 w-full text-white p-3"
          >
            Log In
          </button>
        </form>

        <button
          type="submit"
          className="w-full text-sm mt-6 cursor-pointer text-blue500"
        >
          Forgot your password?
        </button>

        <div className="flex gap-1 items-center justify-center text-xs mt-20 text-[#B0B9C8] text-center">
          <Link href="#" className="underline text-[#434854]">
            Privacy Policy
          </Link>
          <span>and</span>
          <Link href="#" className="underline text-[#434854]">
            Terms of Service
          </Link>
        </div>
      </div>

      <SuccessModal isOpen={showSuccessModal} />
    </>
  );
}
