import { cn } from "@/lib/ui/utils";

interface CodeBlockProps {
  code: string;
  language?: "bash" | "json" | "typescript" | "javascript";
  title?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language = "bash",
  title,
  className,
}: CodeBlockProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800",
        className,
      )}
    >
      {title && (
        <div className="border-b border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 sm:px-4 sm:text-sm">
          {title}
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
