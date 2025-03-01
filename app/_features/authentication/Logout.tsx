import { TbLogout } from "react-icons/tb";
import Button from "@/app/_components/Button";

function Logout() {
  return (
    <Button
      btnType="submit"
      // FIXME
      onClick="/"
      color="red"
      addClassName="flex items-center gap-1"
    >
      <span className="text-[1.2rem]">
        <TbLogout />
      </span>
      <span>Logout</span>
    </Button>
  );
}

export default Logout;
