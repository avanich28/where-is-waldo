const defaultStyles = {
  primary: "border rounded-md px-2 capitalize text-sm sm:text-base lg:text-lg",
  secondary:
    "border-b pr-[3vw] font-semibold sm:font-bold sm:text-lg md:text-xl lg:text-2xl",
};

function Select({
  name,
  data,
  onChange,
  value,
  setValue,
  isLink = false,
  type = "primary",
  addClassName = "",
}) {
  return (
    <select
      name={name}
      id={name}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e);
      }}
      className={`py-1 bg-light-bg dark:bg-dark-bg border-light-container dark:border-dark-container tracking-wide sm:tracking-wider ${defaultStyles[type]} ${addClassName}`}
    >
      {isLink
        ? data.map((obj) => (
            <option key={obj.value} value={obj.value}>
              {obj.text}
            </option>
          ))
        : data.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
    </select>
  );
}

export default Select;
