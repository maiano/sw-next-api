import type { ExpandTree } from "./parseExpand";

export function limitExpandDepth(
  tree: ExpandTree,
  maxDepth: number,
): ExpandTree {
  if (maxDepth === 0) return {};

  const result: ExpandTree = {};

  for (const key in tree) {
    result[key] = limitExpandDepth(tree[key], maxDepth - 1);
  }

  return result;
}
