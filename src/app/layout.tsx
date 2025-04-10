"use client";
import localFont from "next/font/local";
import "./globals.css";
import SideBar from "@/components/sidebar";
import Header from "@/components/header";
import { ConfigProvider } from "antd";
import { SearchProvider } from "@/context/SearchContext";
import { useDevice } from "@/hooks";
import MobileComponent from "@/components/mobileComponent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const deviceType = useDevice();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#A93636",
            },
          }}
        >
          <SearchProvider>
            {deviceType === "mobile" || deviceType === "tablet" ? (
              <MobileComponent />
            ) : (
              <div className="flex h-screen">
                <SideBar />
                <div className="flex flex-col w-full">
                  <Header />
                  <div className="flex-1 overflow-y-auto">{children}</div>
                </div>
              </div>
            )}
          </SearchProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
