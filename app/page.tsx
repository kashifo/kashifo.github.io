"use client";

import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { TechFilter } from "@/components/TechFilter";
import { RepoSection } from "@/components/RepoSection";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <TechFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <div className="h-8" />
        <RepoSection activeCategory={activeCategory} />
      </main>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-white/5 mt-auto">
        <p className="text-xs text-white/30">
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            Next.js
          </a>{" "}
          &{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            Tailwind
          </a>
        </p>
        <p className="mt-1.5 text-xs text-white/20">
          <a
            href="https://github.com/kashifo/kashifo.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source →
          </a>
        </p>
      </footer>
    </div>
  );
}
