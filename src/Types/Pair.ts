export type Pair<T = string | number> = {
  key: T;
  value: string;
  group?: string;
  selected?: boolean;
};
