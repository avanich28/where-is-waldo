function Input({
  type = "text",
  name,
  defaultValue = "",
  isPending,
  minLength = 1,
  maxLength = 30,
}) {
  return (
    <input
      type={type}
      name={name}
      defaultValue={defaultValue}
      disabled={isPending}
      minLength={minLength}
      maxLength={maxLength}
      className="px-2 py-1 bg-light-inTable dark:bg-dark-inTable rounded-md"
      required
    />
  );
}

export default Input;
