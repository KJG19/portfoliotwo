import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SharedLayout } from "@/components/layout/SharedLayout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyle Guenter — Software Engineer",
  description:
    "Portfolio of Kyle Guenter, a full-stack software engineer building clean, fast web applications.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Kyle Guenter — Software Engineer",
    description:
      "Software engineer specializing in web development and full-stack applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyle Guenter — Software Engineer",
    description:
      "Software engineer specializing in web development and full-stack applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <SharedLayout>{children}</SharedLayout>
      </body>
    </html>
  );
}
