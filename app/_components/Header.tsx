import { JSX } from "react";
import Logo from "./Logo";
import Nav from "./Nav";

function Header(): JSX.Element {
  return (
    <header className="flex items-center justify-center pt-[4vh]">
      <Logo />
      <div className="absolute right-[3vw]">
        <Nav />
      </div>
    </header>
  );
}

export default Header;
