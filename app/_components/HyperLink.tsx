const defaultStyles = {
  primary:
    "primaryTransition hover:text-hover-secondary hover:dark:text-hover-primary",
};

function HyperLink({ children, href, type = "primary", addClassName = "" }) {
  return (
    <a href={href} className={`${defaultStyles[type]} ${addClassName}`}>
      {children}
    </a>
  );
}

export default HyperLink;
