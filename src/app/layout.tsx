import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/context/ToastContext";
export const metadata: Metadata = {
  title: "Employee Management System",
  description: "Employee Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased w-full h-full`}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
