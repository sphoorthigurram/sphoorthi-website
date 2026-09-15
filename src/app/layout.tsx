import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Sphoorthi Gurram — Computer Engineering Portfolio",
  description:
    "CPEN Honors student at Texas A&M building autonomous robots, bidirectional EV chargers, and intelligent hardware systems.",
  keywords: [
    "Sphoorthi Gurram",
    "Computer Engineering",
    "Texas A&M",
    "Robotics",
    "Power Electronics",
    "Portfolio",
  ],
  authors: [{ name: "Sphoorthi Gurram" }],
  openGraph: {
    title: "Sphoorthi Gurram — Computer Engineering Portfolio",
    description:
      "Building autonomous robots, designing power electronics, and bridging hardware with intelligence.",
    type: "website",
    images: ["https://sphoorthigurram.github.io/sphoorthi-website/headshot.jpg"],
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
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
