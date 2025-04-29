import { type PropsWithChildren } from "react";

type ButtonStyles = "primary";
type ButtonColors = "primary" | "red" | "green";

const defaultStyles: Record<ButtonStyles, string> = {
  primary:
    "px-2 sm:px-3 lg:px-4 py-1 rounded-md active:scale-[0.96] uppercase font-bold tracking-wide sm:tracking-wider text-xs sm:text-sm lg:text-base primaryTransition",
};

const defaultColors: Record<ButtonColors, string> = {
  primary:
    "bg-light-container dark:bg-dark-container hover:bg-hover-primary dark:hover:bg-hover-secondary",
  red: "text-white bg-red-700 hover:bg-red-600",
  green: "text-white bg-green-700 hover:bg-green-600",
};

type ButtonProps = PropsWithChildren<{
  onClick: () => void;
  type?: ButtonStyles;
  color?: ButtonColors;
  addClassName?: string;
}>;

function Button({
  children,
  onClick,
  type = "primary",
  color = "primary",
  addClassName = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${defaultStyles[type]} ${defaultColors[color]} ${addClassName}`}
    >
      {children}
    </button>
  );
}

export default Button;
