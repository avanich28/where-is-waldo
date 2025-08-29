import Link from "next/link";
import { type PropsWithChildren } from "react";

type LinkButtonStyles = "primary";
type LinkButtonColors = "primary" | "green";

const defaultStyles: Record<LinkButtonStyles, string> = {
  primary:
    "px-2 sm:px-3 lg:px-4 py-1 rounded-md active:scale-[0.96] uppercase font-bold text-xs sm:text-sm lg:text-base tracking-wide sm:tracking-wider secondaryTransition",
};

const defaultColors: Record<LinkButtonColors, string> = {
  primary:
    "bg-light-container dark:bg-dark-container hover:bg-hover-primary dark:hover:bg-hover-secondary",
  green: "text-white bg-green-700 hover:bg-green-600",
};

type LinkButtonProps = PropsWithChildren<{
  href: string;
  type?: LinkButtonStyles;
  color?: LinkButtonColors;
  addClassName?: string;
}>;

function LinkButton({
  children,
  href,
  type = "primary",
  color = "primary",
  addClassName = "",
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${defaultStyles[type]} ${defaultColors[color]} ${addClassName}`}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
