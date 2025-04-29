import { type PropsWithChildren } from "react";

type FormRowProps = PropsWithChildren<{
  label: string;
}>;

function FormRow({ children, label }: FormRowProps) {
  return (
    <div className="flex flex-col gap-1 text-sm sm:text-base">
      <label className="capitalize text-light-textHead dark:text-dark-textHead font-medium sm:font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormRow;
