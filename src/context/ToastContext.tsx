"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import Toast from "@/components/common/Toast";

interface ToastState {
  isVisible: boolean;
  message: string;
  type: "success" | "error" | "warning";
}
interface ToastContextValue {
  showToast: (message: string, type?: "success" | "error" | "warning") => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = useState<ToastState>({
    isVisible: false,
    message: "",
    type: "success",
  });

  const showToast = (
    message: string,
    type: "success" | "error" | "warning" = "success"
  ) => {
    setToast({ isVisible: true, message, type });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        isVisible={toast.isVisible}
        message={toast.message}
        type={toast.type}
        onClose={() =>
          setToast({ isVisible: false, message: "", type: "success" })
        }
      />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
