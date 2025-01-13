

import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import Provider from "./provider";
import { Toaster } from "@/components/ui/sonner"


const host_Grotesk=Host_Grotesk({
  subsets:['latin']
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body
        className={host_Grotesk.className}
      >
          <Provider>{children}</Provider>
        <Toaster/>
        </body>
      </html>
    </ClerkProvider>
  );
}
