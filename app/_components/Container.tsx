import { type PropsWithChildren } from "react";

type ContainerStyles = "primary" | "secondary" | "square";

const defaultStyles: Record<ContainerStyles, string> = {
  primary:
    "flex flex-wrap p-1 rounded-md bg-light-container dark:bg-dark-container",
  secondary:
    "flex flex-col px-3 py-2 rounded-md bg-light-container dark:bg-dark-container",
  square: "grid grid-cols-2 grid-rows-2 gap-3 sm:gap-5 lg:gap-6",
};

type ContainerProps = PropsWithChildren<{
  type?: ContainerStyles;
  addClassName?: string;
}>;

function Container({
  children,
  type = "primary",
  addClassName = "",
}: ContainerProps) {
  return (
    <div className={`${defaultStyles[type]} ${addClassName}`}>{children}</div>
  );
}

export default Container;
