import { type PropsWithChildren } from "react";

type ButtonStyles = "primary" | "secondary";
type ButtonColors = "primary" | "secondary" | "red";

const defaultStyles: Record<ButtonStyles, string> = {
  primary:
    "px-2 sm:px-3 lg:px-4 py-1 rounded-md active:scale-[0.96] uppercase font-bold tracking-wide sm:tracking-wider text-xs sm:text-sm lg:text-base secondaryTransition",
  secondary:
    "uppercase text-center tracking-wider font-semibold sm:font-bold text-xs sm:text-sm lg:text-base rounded-md p-1 w-[8rem] sm:w-40 lg:w-[12rem] secondaryTransition",
};

const defaultColors: Record<ButtonColors, string> = {
  primary:
    "bg-light-container dark:bg-dark-container hover:bg-hover-primary dark:hover:bg-hover-secondary",
  secondary:
    "text-light-textHead dark:text-dark-textHead hover:text-hover-primary dark:hover:text-hover-secondary",
  red: "text-white bg-red-700 hover:bg-red-600",
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
