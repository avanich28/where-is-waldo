import { LuGamepad2 } from "react-icons/lu";
import HyperLink from "./HyperLink";

function ImageDetail({ name, artist, source }) {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <span className="text-[1.8em]">
        <LuGamepad2 />
      </span>
      <span>
        {name} by <HyperLink href={source}>{artist}</HyperLink>
      </span>
    </div>
  );
}

export default ImageDetail;
