import type { MDXComponents } from "mdx/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Make components available in MDX
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    Badge,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    CodeBlock,
    // Override default code blocks with our custom CodeBlock component
    pre: ({ children, ...props }: React.ComponentPropsWithoutRef<"pre">) => {
      // Extract code content from children
      if (
        typeof children === "object" &&
        children !== null &&
        "props" in children
      ) {
        const codeProps = (
          children as { props: { children?: string; className?: string } }
        ).props;
        const code = codeProps.children || "";
        const className = codeProps.className || "";

        // Extract language from className (e.g., "language-bash")
        const languageMatch = className.match(/language-(\w+)/);
        const language = languageMatch
          ? (languageMatch[1] as "bash" | "json" | "typescript" | "javascript")
          : "bash";

        return (
          <CodeBlock code={code} language={language} showCopyButtons={true} />
        );
      }

      // Fallback to default pre
      return <pre {...props}>{children}</pre>;
    },
  };
}
