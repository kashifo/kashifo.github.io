"use client";

import { useState } from "react";
import { PROFILE } from "@/lib/data";
import Image from "next/image";

export function HeroSection() {
    const [showLifetime, setShowLifetime] = useState(false);

    return (
        <section className="flex flex-col items-center px-4 pb-10">
            {/* Top Spacer */}
            <div className="h-24" />

            {/* Profile Section */}
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                {/* Avatar with glow */}
                <div className="relative mt-8 mb-5 animate-float">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 blur-lg opacity-40 animate-pulse-glow" />
                    <Image
                        src={PROFILE.avatarUrl}
                        alt={PROFILE.name}
                        width={100}
                        height={100}
                        className="relative rounded-full border-2 border-white/10"
                        priority
                    />
                </div>

                {/* Name */}
                <h1 className="text-2xl md:text-4xl font-bold mb-2 gradient-text">
                    {PROFILE.name}
                </h1>

                {/* Title */}
                <p className="text-sm md:text-base text-white/70 mb-3">
                    {PROFILE.title}
                </p>

                {/* Bio */}
                <p className="text-sm text-white/50 mb-4 max-w-xl">
                    {PROFILE.bio}{" "}
                    <a
                        href={PROFILE.socialNestUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300"
                    >
                        {PROFILE.socialNestUrl}
                    </a>
                </p>

                {/* CV Link */}
                <a
                    href={PROFILE.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 mb-6 text-sm rounded-full glass border border-cyan-500/30 hover:border-cyan-400 transition-all glow-cyan-subtle"
                >
                    <span>📄</span>
                    <span>View CV Profile</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>

                {/* Spacer */}
                <div className="h-8" />

                {/* Contribution Section */}
                <div className="w-full max-w-lg">
                    <div className="flex justify-end mb-1">
                        <button
                            onClick={() => setShowLifetime(true)}
                            className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                        >
                            View lifetime contributions
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </button>
                    </div>
                    <div className="glass rounded-xl p-3">
                        <Image
                            src="/contribs-small.jpg"
                            alt="GitHub Contributions"
                            width={500}
                            height={120}
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>

                {/* Bottom Spacer */}
                <div className="h-12" />
            </div>

            {/* Lifetime Contributions Popup */}
            {showLifetime && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={() => setShowLifetime(false)}
                >
                    <div
                        className="relative max-w-md w-full mx-4 max-h-[85vh] overflow-y-auto glass rounded-xl p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 flex justify-between items-center mb-3 pb-2 border-b border-white/10 bg-[#0a0a0f]/90 -mx-4 px-4 -mt-4 pt-4">
                            <h3 className="text-sm font-medium text-white/80">Lifetime Contributions</h3>
                            <button
                                onClick={() => setShowLifetime(false)}
                                className="text-white/50 hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <Image
                            src="/contribs-lifetime.png"
                            alt="Lifetime GitHub Contributions"
                            width={400}
                            height={2000}
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
