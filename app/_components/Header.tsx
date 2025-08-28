import { getUserData } from "@/app/_lib/data-services";
import Logo from "./Logo";
import Nav from "./Nav";

async function Header() {
  const { name } = await getUserData();

  return (
    <header className="pt-[4vh] flex items-center justify-center gap-1 ">
      <Logo />
      <div className="absolute right-[3vw]">
        <Nav name={name} />
      </div>
    </header>
  );
}

export default Header;
