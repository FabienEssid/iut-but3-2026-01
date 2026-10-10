import type { RadioFilterProps } from "../types/RadioFilter";

export const RadioFilter = ({ name, value, checked, onChange, children }: RadioFilterProps) => {
  return (
    <label className="flex items-center gap-1">
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
      {children}
    </label>
  );
};
