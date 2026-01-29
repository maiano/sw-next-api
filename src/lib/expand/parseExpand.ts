export type ExpandTree = {
  [key: string]: ExpandTree;
};

export function parseExpand(value?: string | null): ExpandTree {
  if (!value) return {};

  const tree: ExpandTree = {};

  for (const path of value.split(",")) {
    const parts = path.trim().split(".");

    let node = tree;

    for (const part of parts) {
      node[part] ??= {};
      node = node[part];
    }
  }

  return tree;
}
