import { FaGithub } from "react-icons/fa";
import HyperLink from "./HyperLink";

function Footer() {
  return (
    <footer className="pb-4 flex justify-center">
      <HyperLink
        href="https://github.com/avanich28/where-is-waldo"
        addClassName="flex flex-col items-center gap-2"
      >
        <span className="text-3xl sm:text-4xl lg:text-5xl">
          <FaGithub />
        </span>
        <p className="text-[10px] sm:text-xs lg:text-sm">
          &copy; Copyright by avanich28
        </p>
      </HyperLink>
    </footer>
  );
}

export default Footer;
