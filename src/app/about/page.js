"use client";

import { Footer, Navbar } from "@/components";
import { Roboto } from "next/font/google";
import Inquiry from "@/components/inquiry";
import About from "@/components/about";

export default function AboutPage() {
  return (
    <div className="h-screen">
      <Navbar />
      <About />
    </div>
  );
}
