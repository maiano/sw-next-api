"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/ui/utils";
import { Badge } from "@/components/ui/badge";

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Base URL", href: "/docs/base-url" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "People", href: "/docs/people" },
      { title: "Films", href: "/docs/films" },
      { title: "Planets", href: "/docs/planets" },
      { title: "Species", href: "/docs/species" },
      { title: "Starships", href: "/docs/starships" },
      { title: "Vehicles", href: "/docs/vehicles" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Overview", href: "/docs/core-concepts" },
      { title: "Pagination", href: "/docs/core-concepts#pagination" },
      { title: "Expansion", href: "/docs/core-concepts#expansion" },
      { title: "Filtering", href: "/docs/core-concepts#filtering" },
      { title: "Sorting", href: "/docs/core-concepts#sorting" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { title: "TypeScript Types", href: "/docs/types" },
      { title: "Zod Validation", href: "/docs/validation" },
    ],
  },
];

export default function DocsLayout({ children }: { children: ReactNode }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header - same as landing */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xl font-bold text-zinc-950 dark:text-zinc-50"
            >
              Star Wars API
            </Link>
            <Badge variant="info">Documentation</Badge>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-1">
              {navigation.map((section) => (
                <li
                  key={section.title}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(section.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
                  >
                    {section.title}
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  {openDropdown === section.title && (
                    <div className="absolute left-0 top-full mt-1 w-48 rounded-lg border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
                      <ul className="py-2">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={cn(
                                "block px-4 py-2 text-sm transition-colors",
                                pathname === item.href
                                  ? "bg-zinc-100 font-medium text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                                  : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100",
                              )}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="https://github.com/maiano/sw-next-api"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </div>
      </header>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-16">
        <article className="prose prose-zinc dark:prose-invert max-w-none prose-headings:text-center prose-h1:mb-12 prose-h2:mt-16 prose-h2:mb-8">
          {children}
        </article>
      </div>

      {/* Footer - same as landing */}
      <footer className="border-t border-zinc-200 pt-8 pb-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p>Built with Next.js 16 and TypeScript</p>
          <p className="mt-2">
            Data based on{" "}
            <a
              href="https://swapi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700 dark:hover:text-zinc-400"
            >
              SWAPI
            </a>{" "}
            · MIT License
          </p>
        </div>
      </footer>
    </div>
  );
}
