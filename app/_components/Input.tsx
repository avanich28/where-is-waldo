function Input({ label, inputType = "text" }) {
  return (
    <div className="flex flex-col gap-1 text-sm sm:text-base">
      <label className="capitalize text-light-textHead dark:text-dark-textHead font-medium sm:font-semibold">
        {label}
      </label>
      <input
        className="px-2 py-1 bg-light-inTable dark:bg-dark-inTable rounded-md "
        type={inputType}
        name={label
          .split(" ")
          .map((word, i) =>
            i === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)
          )
          .join("")}
      />
    </div>
  );
}

export default Input;
