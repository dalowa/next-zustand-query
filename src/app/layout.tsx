"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import queryClient from "@/queryClient";

export const metadata = {
  title: "New",
  description: "This will work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className="bg-black text-white">{children}</body>
      </QueryClientProvider>
    </html>
  );
}
