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
  title: "CODOM - Write and Execute Code Effortlessly",
  description:
    "CODOM is a versatile platform to write and execute code in diverse programming languages including JavaScript, TypeScript, C++, Python, Java, and more. Experience an intuitive, interactive code editor tailored for coding enthusiasts and learners.",
  keywords: [
    "CODOM",
    "Code Editor",
    "Interactive Coding",
    "JavaScript",
    "TypeScript",
    "C++",
    "Python",
    "Java",
    "Programming Platform",
    "Code Playground",
    "Learn Programming",
    "Execute Code",
  ],
  authors: [{ name: "Hamdi Ben Ghayadha", url: "https://thishamdi.com" }],
  openGraph: {
    title: "CODOM - Write and Execute Code in Any Language",
    description:
      "Experience the power of CODOM, a platform designed to write and execute code in languages like JavaScript, TypeScript, C++, Python, and Java. Perfect for coding enthusiasts and learners.",
    siteName: "CODOM",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CODOM - Write and Execute Code in Any Language",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
