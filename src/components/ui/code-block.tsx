"use client";

import { useState } from "react";
import { cn } from "@/lib/ui/utils";

interface CodeBlockProps {
  code: string;
  language?: "bash" | "json" | "typescript" | "javascript";
  title?: string;
  className?: string;
  showCopyButtons?: boolean;
}

function RequestLine({ url }: { url: string }) {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedCurl, setCopiedCurl] = useState(false);

  const copyToClipboard = async (text: string, type: "url" | "curl") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "url") {
        setCopiedUrl(true);
        setTimeout(() => setCopiedUrl(false), 2000);
      } else {
        setCopiedCurl(true);
        setTimeout(() => setCopiedCurl(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="group flex items-center justify-between gap-2 py-1">
      <code className="flex-1 text-green-400">GET {url}</code>
      <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <button
          type="button"
          onClick={() => copyToClipboard(url, "url")}
          className="flex items-center gap-1 rounded bg-zinc-800 px-2 py-0.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-700"
          aria-label="Copy URL"
        >
          {copiedUrl ? (
            <>
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="hidden sm:inline">Copied</span>
            </>
          ) : (
            "URL"
          )}
        </button>
        <button
          type="button"
          onClick={() => copyToClipboard(`curl "${url}"`, "curl")}
          className="flex items-center gap-1 rounded bg-zinc-800 px-2 py-0.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-700"
          aria-label="Copy curl command"
        >
          {copiedCurl ? (
            <>
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="hidden sm:inline">Copied</span>
            </>
          ) : (
            "curl"
          )}
        </button>
      </div>
    </div>
  );
}

function MultipleRequestsBlock({
  urls,
  title,
  className,
}: {
  urls: string[];
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800",
        className,
      )}
    >
      {title && (
        <div className="border-b border-zinc-200 bg-zinc-50 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300 sm:text-sm">
            {title}
          </span>
        </div>
      )}
      <div className="relative">
        <pre
          className={cn(
            "overflow-x-auto p-3 text-xs sm:p-4 sm:text-sm",
            "bg-zinc-950 text-zinc-50 dark:bg-zinc-900",
          )}
        >
          {urls.map((url) => (
            <RequestLine key={url} url={url} />
          ))}
        </pre>
      </div>
    </div>
  );
}

export function CodeBlock({
  code,
  language = "bash",
  title,
  className,
  showCopyButtons = true,
}: CodeBlockProps) {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedCurl, setCopiedCurl] = useState(false);

  // Check if this is a bash block with multiple GET requests
  const lines = code.trim().split("\n");
  const getRequests = lines.filter((line) => line.trim().startsWith("GET "));
  const hasMultipleRequests = language === "bash" && getRequests.length > 1;

  const isHttpRequest = language === "bash" && code.trim().startsWith("GET ");
  const url = isHttpRequest ? code.trim().replace(/^GET\s+/, "") : "";

  const copyToClipboard = async (text: string, type: "url" | "curl") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "url") {
        setCopiedUrl(true);
        setTimeout(() => setCopiedUrl(false), 2000);
      } else {
        setCopiedCurl(true);
        setTimeout(() => setCopiedCurl(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Handle multiple GET requests with inline buttons
  if (hasMultipleRequests && showCopyButtons) {
    const urls = getRequests.map((line) => line.trim().replace(/^GET\s+/, ""));
    return (
      <MultipleRequestsBlock urls={urls} title={title} className={className} />
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800",
        className,
      )}
    >
      {(title || (showCopyButtons && isHttpRequest)) && (
        <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300 sm:text-sm">
            {title || "Request"}
          </span>
          {showCopyButtons && isHttpRequest && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => copyToClipboard(url, "url")}
                className="flex items-center gap-1 rounded bg-zinc-200 px-2 py-1 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                aria-label="Copy URL"
              >
                {copiedUrl ? (
                  <>
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Copied
                  </>
                ) : (
                  "Copy URL"
                )}
              </button>
              <button
                type="button"
                onClick={() => copyToClipboard(`curl "${url}"`, "curl")}
                className="flex items-center gap-1 rounded bg-zinc-200 px-2 py-1 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                aria-label="Copy curl command"
              >
                {copiedCurl ? (
                  <>
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Copied
                  </>
                ) : (
                  "Copy curl"
                )}
              </button>
            </div>
          )}
        </div>
      )}
      <div className="relative">
        <pre
          className={cn(
            "overflow-x-auto p-3 text-xs sm:p-4 sm:text-sm",
            "bg-zinc-950 text-zinc-50 dark:bg-zinc-900",
            "scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-700",
            language === "bash" && "text-green-400",
            language === "json" && "text-blue-300",
            (language === "typescript" || language === "javascript") &&
              "text-purple-300",
          )}
        >
          <code className="break-all whitespace-pre-wrap sm:break-normal sm:whitespace-pre">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
