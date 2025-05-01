"use client";
import React from "react";
export interface InputProps {
  name: string;
  type?: string;
  placeholder?: string;
  label: string;
  required?: boolean;
  value?: any;
  disabled?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  min?: number;
  max?: number;
  pattern?: string;
  title?: string;
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({
  name,
  type = "text",
  placeholder = "",
  label,
  required = false,
  value = "",
  onChange,
  disabled,
  min,
  max,
  pattern,
  title,
  ...rest
}) => {
  return (
    <div className="relative w-full mb-4">
      <label htmlFor={name} className="flex font-semibold pl-2">
        {label}
        {required && <span className="text-red-400 font-medium ml-1">*</span>}
      </label>

      <div className="relative">
        {type === "textarea" ? (
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className="w-full p-3 rounded-full bg-white border-2 border-transparent focus:border-[#FF4B2B] text-gray-700 text-sm shadow-md focus:outline-none placeholder-gray-400 transition-all"
            rows={4}
            {...rest}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            min={min}
            max={max}
            pattern={pattern}
            title={title}
            required={required}
            autoComplete="off"
            onWheel={(e) => (e.target as HTMLInputElement).blur()}
            {...rest}
            className={`w-full pl-3 py-2 rounded-full bg-white border-2 border-transparent focus:border-[#FF4B2B] text-gray-700 text-sm shadow-md focus:outline-none placeholder-gray-400 transition-all ${
              type === "date" ? "pr-11" : ""
            } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
