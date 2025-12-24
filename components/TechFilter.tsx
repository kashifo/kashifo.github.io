"use client";

import { REPO_CATEGORIES } from "@/lib/data";

interface TechFilterProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export function TechFilter({ activeCategory, onCategoryChange }: TechFilterProps) {
    return (
        <section className="sticky top-0 z-50 py-3 mb-6 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5">
            <div className="flex justify-center px-4">
                <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
                    {REPO_CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => onCategoryChange(category)}
                            className={`tech-pill ${activeCategory === category ? "active" : ""}`}
                        >
                            {category === "Featured" && "⭐ "}
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
