import "@/styles/globals.css";
import { type Metadata } from "next";
import  { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { TRPCReactProvider } from "@/trpc/react";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GitCollab",
  description: "GitCollab is a platform for collaborating on Git repositories.",
  icons: [{ rel: "icon", url: "/faviconB.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="en"  className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>  
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <TRPCReactProvider>{children}</TRPCReactProvider>
          </ThemeProvider>
        <Toaster richColors />
      </body>
    </html>
    </ClerkProvider>
  );
}
