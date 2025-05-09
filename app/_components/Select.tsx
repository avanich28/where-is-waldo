import { memo } from "react";

type SelectStyles = "primary" | "secondary";

const defaultStyles: Record<SelectStyles, string> = {
  primary: "border rounded-md px-2 capitalize text-sm sm:text-base lg:text-lg",
  secondary:
    "border-b pr-[3vw] font-semibold sm:font-bold sm:text-lg md:text-xl lg:text-2xl",
};

type LinkOption = {
  value: string;
  text: string;
};

type SelectProps = {
  name: string;
  data: LinkOption[] | string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  isLink?: boolean;
  type?: SelectStyles;
  addClassName?: string;
};

function Select({
  name,
  data,
  onChange,
  value,
  isLink = false,
  type = "primary",
  addClassName = "",
}: SelectProps) {
  return (
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className={`py-1 bg-light-bg dark:bg-dark-bg border-light-container dark:border-dark-container tracking-wide sm:tracking-wider ${defaultStyles[type]} ${addClassName}`}
    >
      {isLink
        ? (data as LinkOption[]).map((obj) => (
            <option key={obj.value} value={obj.value}>
              {obj.text}
            </option>
          ))
        : (data as string[]).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
    </select>
  );
}

export default memo(Select);
