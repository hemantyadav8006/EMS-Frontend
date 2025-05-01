"use client";

import React, { useEffect, useState } from "react";

type ToastType = "success" | "error" | "warning";

interface ToastProps {
  message: string;
  type?: ToastType;
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = "success",
  isVisible,
  onClose,
}) => {
  const [progress, setProgress] = useState(100);

  const DURATION = 4000;

  const toastTypeStyles = {
    success: {
      iconBg: "bg-green-100",
      iconText: "text-green-500",
      iconPath: (
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      ),
    },
    error: {
      iconBg: "bg-red-100",
      iconText: "text-red-500",
      iconPath: (
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
      ),
    },
    warning: {
      iconBg: "bg-orange-100",
      iconText: "text-orange-500",
      iconPath: (
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
      ),
    },
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    if (isVisible) {
      setProgress(100);

      timer = setTimeout(() => {
        onClose();
      }, DURATION);

      const startTime = Date.now();
      interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const percentage = Math.max(100 - (elapsed / DURATION) * 100, 0);
        setProgress(percentage);
      }, 100);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 max-lg:top-20">
      <div
        className={`flex flex-col items-start w-full max-w-xs p-4 mb-4 rounded-lg shadow-lg bg-gradient-to-r from-[#FF4B2B] to-[#FF416C] text-white relative overflow-hidden`}
        role="alert"
      >
        <div className="flex items-center w-full">
          <div
            className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ${toastTypeStyles[type].iconBg} ${toastTypeStyles[type].iconText} rounded-full bg-white`}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              {toastTypeStyles[type].iconPath}
            </svg>
            <span className="sr-only">{type} icon</span>
          </div>
          <div className="ml-3 text-sm font-medium flex-1">{message}</div>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 p-1 text-white hover:text-black bg-transparent rounded-full focus:outline-none"
            aria-label="Close"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20">
          <div
            className="h-1 bg-white transition-all duration-100 linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
