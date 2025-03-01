const defaultStyles = {
  primary:
    "px-2 sm:px-3 lg:px-4 py-1 rounded-md active:scale-[0.96] uppercase font-bold tracking-wide sm:tracking-wider text-xs sm:text-sm lg:text-base primaryTransition",
};

const defaultColors = {
  primary:
    "bg-light-container dark:bg-dark-container hover:bg-hover-primary dark:hover:bg-hover-secondary",
  red: "text-white bg-red-700 hover:bg-red-600",
  green: "text-white bg-green-700 hover:bg-green-600",
};

function Button({
  children,
  onClick,
  type = "primary",
  color = "primary",
  addClassName = "",
}) {
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
