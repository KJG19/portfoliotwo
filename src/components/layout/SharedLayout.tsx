"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GradientBlobs } from "@/components/ui/GradientBlobs";
import { useLenis } from "@/hooks/useLenis";

export function SharedLayout({ children }: { children: React.ReactNode }) {
  useLenis();

  return (
    <>
      <GradientBlobs />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
