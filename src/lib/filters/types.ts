export type FilterFieldConfig = {
  field: string;
  type: "string" | "number" | "enum" | "boolean";
  values?: readonly string[];
};

export type FilterConfig = {
  [param: string]: FilterFieldConfig;
};

export type FilterPredicate<T> = (item: T) => boolean;
