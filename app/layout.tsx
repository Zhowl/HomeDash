"use client";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import React from "react";

import { SSEConnectProvider } from "@/app/home/utils/sseContext";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <SSEConnectProvider>{children}</SSEConnectProvider>
        <Analytics />
      </body>
    </html>
  );
}
