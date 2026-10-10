import type { ReactNode } from "react";

export type RadioFilterProps = {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  children: ReactNode;
};
