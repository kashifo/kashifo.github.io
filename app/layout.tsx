import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kashif Anwaar | GitHub Portfolio",
  description: "Technologist, Software & Product Enthusiast, Coding Hobbyist. Explore my GitHub projects and contributions in Flutter, React, Next.js, Kotlin, and more.",
  keywords: ["Kashif Anwaar", "GitHub", "Portfolio", "Developer", "Software Engineer", "Flutter", "React", "Next.js", "Android", "Kotlin", "TypeScript"],
  authors: [{ name: "Kashif Anwaar", url: "https://github.com/kashifo" }],
  creator: "Kashif Anwaar",
  publisher: "Kashif Anwaar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Kashif Anwaar | GitHub Portfolio",
    description: "Technologist, Software & Product Enthusiast. Explore my open source projects.",
    url: "https://kashifo.github.io",
    siteName: "Kashif Anwaar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashif Anwaar | GitHub Portfolio",
    description: "Technologist, Software & Product Enthusiast. Explore my open source projects.",
    creator: "@kashifanwaar",
  },
  alternates: {
    canonical: "https://kashifo.github.io",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://kashifo.github.io" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen`}>
        <div className="grid-pattern fixed inset-0 pointer-events-none opacity-50" />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
