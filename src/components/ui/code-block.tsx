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
        <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
          {title}
        </div>
      )}
      <div className="relative">
        <pre
          className={cn(
            "overflow-x-auto p-4 text-sm",
            "bg-zinc-950 text-zinc-50 dark:bg-zinc-900",
            language === "bash" && "text-green-400",
            language === "json" && "text-blue-300",
            (language === "typescript" || language === "javascript") &&
              "text-purple-300",
          )}
        >
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
