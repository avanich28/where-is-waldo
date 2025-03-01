"use client";

import { useFormStatus } from "react-dom";

const defaultStyles = {
  primary:
    "px-2 sm:px-3 lg:px-4 py-1 rounded-md active:scale-[0.96] uppercase font-bold tracking-wide sm:tracking-wider text-xs sm:text-sm lg:text-base primaryTransition bg-light-container dark:bg-dark-container hover:bg-hover-primary dark:hover:bg-hover-secondary",
};

function SubmitButton({
  children,
  pendingLabel = "submitting...",
  type = "primary",
  addClassName = "",
}) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`${defaultStyles[type]} ${addClassName}`}
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

export default SubmitButton;
