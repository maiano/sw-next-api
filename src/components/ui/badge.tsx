import type { HTMLAttributes } from "react";
import { cn } from "@/lib/ui/utils";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "info";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        {
          "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50":
            variant === "default",
          "bg-green-100 text-green-900 dark:bg-green-900/30 dark:text-green-400":
            variant === "success",
          "bg-yellow-100 text-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-400":
            variant === "warning",
          "bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-400":
            variant === "info",
        },
        className,
      )}
      {...props}
    />
  );
}
