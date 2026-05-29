import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: portfolio.fullName,
  description: `${portfolio.fullName} — Web developer (frontend & backend) based in Lahore, Pakistan.`,
  icons: { icon: "/Icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-white text-[#222222] font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
