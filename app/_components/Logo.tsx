import { JSX } from "react";
import { Passero_One } from "next/font/google";
import Link from "next/link";
import { TbTargetArrow } from "react-icons/tb";

const passeroOne = Passero_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

function Logo(): JSX.Element {
  return (
    <Link
      href="/games"
      className={`${passeroOne.className} uppercase text-5xl sm:text-6xl lg:text-7xl tracking-wide`}
    >
      <span className="">Sp</span>
      <span className="inline-block text-[40px] lg:text-[48px] text-red-700">
        <TbTargetArrow />
      </span>
      <span className="">t</span>
      <span className="text-hover-secondary">h</span>
      <span className="text-hover-primary">ü</span>
      <span className="text-hover-secondary">nt</span>
    </Link>
  );
}

export default Logo;
