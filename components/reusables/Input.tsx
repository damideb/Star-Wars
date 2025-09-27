"use client";
import React from "react";

interface InputProps {
  id: string;
  name: string;
  type?: string;
  label: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default function Input({
  id,
  name,
  type = "text",
  label,
  value,
  placeholder = " ",
  required = false,
  error,
  onChange,
  onBlur,
}: InputProps) {
  return (
    <div>
      <div className="input-container flex flex-col gap-2">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={!!error}
          className={`outline-none p-3 rounded border ${
            error ? "border-red-500" : "border-muted"
          }`}
        />
        <label htmlFor={id} className="floating-label">
          {label}
        </label>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
