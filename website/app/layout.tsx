import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Attendify - Smart Attendance Tracking Made Simple",
  description:
    "Attendify is the easiest way to track attendance for your classes, events, and organizations. Download the APK now and simplify attendance management.",
  keywords: [
    "attendance",
    "tracking",
    "app",
    "mobile",
    "android",
    "classroom",
    "events",
  ],
  openGraph: {
    title: "Attendify - Smart Attendance Tracking Made Simple",
    description:
      "The easiest way to track attendance for your classes, events, and organizations.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-[#0a0a0a]`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
