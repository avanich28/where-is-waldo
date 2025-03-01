import { JSX } from "react";

function Spinner(): JSX.Element {
  return (
    <div className="w-full h-full flex justify-center items-center dark:border-white">
      <div className="spinner"></div>
    </div>
  );
}

export default Spinner;
