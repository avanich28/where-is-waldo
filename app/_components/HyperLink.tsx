import { type PropsWithChildren } from "react";

type HyperLinkStyles = "primary";

const defaultStyles: Record<HyperLinkStyles, string> = {
  primary:
    "primaryTransition hover:text-hover-secondary hover:dark:text-hover-primary",
};

type HyperLinkProps = PropsWithChildren<{
  href: string;
  type?: HyperLinkStyles;
  addClassName?: string;
}>;

function HyperLink({
  children,
  href,
  type = "primary",
  addClassName = "",
}: HyperLinkProps) {
  return (
    <a href={href} className={`${defaultStyles[type]} ${addClassName}`}>
      {children}
    </a>
  );
}

export default HyperLink;
