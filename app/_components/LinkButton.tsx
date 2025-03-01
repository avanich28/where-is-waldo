import Link from "next/link";

const defaultStyles = {
  primary:
    "px-2 sm:px-3 lg:px-4 py-1 rounded-md active:scale-[0.96] uppercase font-bold text-xs sm:text-sm lg:text-base primaryTransition",
};

const defaultColors = {
  primary:
    "bg-light-container dark:bg-dark-container hover:bg-hover-primary dark:hover:bg-hover-secondary ",

  green: "text-white bg-green-700 hover:bg-green-600",
};

function LinkButton({
  children,
  href,
  type = "primary",
  color = "primary",
  addClassName = "",
}) {
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
