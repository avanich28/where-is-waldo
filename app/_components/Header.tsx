import { getUserData } from "@/app/_lib/data-services";
import Logo from "./Logo";
import Nav from "./Nav";

async function Header() {
  const { name } = await getUserData();

  return (
    <header className="flex items-center justify-center pt-[4vh]">
      <Logo />
      <div className="absolute right-[3vw]">
        <Nav name={name} />
      </div>
    </header>
  );
}

export default Header;
