import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sphoorthi Gurram — EE @ Texas A&M",
  description:
    "Personal portfolio of Sphoorthi Gurram — Electrical Engineering student at Texas A&M building autonomous robots, power electronics, and AI systems.",
  keywords: [
    "Sphoorthi Gurram",
    "Electrical Engineering",
    "Texas A&M",
    "Robotics",
    "Power Electronics",
    "Portfolio",
  ],
  authors: [{ name: "Sphoorthi Gurram" }],
  openGraph: {
    title: "Sphoorthi Gurram — EE @ Texas A&M",
    description:
      "Building autonomous robots, designing power electronics, and bridging hardware with intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
