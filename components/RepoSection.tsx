"use client";

import { REPOSITORIES, WIDGET_URLS, GITHUB_USERNAME, type RepoInfo } from "@/lib/data";
import Image from "next/image";

interface RepoSectionProps {
    activeCategory: string;
}

export function RepoSection({ activeCategory }: RepoSectionProps) {
    const filteredRepos = activeCategory === "All"
        ? REPOSITORIES
        : activeCategory === "Featured"
            ? REPOSITORIES.filter((repo) => repo.featured)
            : REPOSITORIES.filter((repo) => repo.category === activeCategory);

    return (
        <section className="pt-10 pb-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
                {filteredRepos.length === 0 ? (
                    <p className="text-center text-white/40 text-sm">No projects found in this category.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl w-full">
                        {filteredRepos.map((repo) => (
                            <RepoCard key={repo.name} repo={repo} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

function RepoCard({ repo }: { repo: RepoInfo }) {
    return (
        <a
            href={`https://github.com/${GITHUB_USERNAME}/${repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
        >
            <div className="glass rounded-lg p-3 hover:border-cyan-500/40 transition-all duration-300 group-hover:glow-cyan-subtle">
                {repo.description && (
                    <p className="text-xs text-white/40 mb-2">{repo.description}</p>
                )}
                <Image
                    src={WIDGET_URLS.repoCard(repo.name)}
                    alt={repo.name}
                    width={320}
                    height={120}
                    className="w-full rounded-md transition-transform group-hover:scale-[1.01]"
                    unoptimized
                />
                {repo.featured && (
                    <span className="inline-block mt-2 px-2 py-0.5 text-[10px] rounded-full bg-gradient-to-r from-cyan-500/15 to-pink-500/15 border border-cyan-500/20">
                        ⭐ Featured
                    </span>
                )}
            </div>
        </a>
    );
}
