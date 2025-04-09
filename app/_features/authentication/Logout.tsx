"use client";

import { TbLogout } from "react-icons/tb";
import { logOutAction } from "@/app/_lib/actions";
import Button from "@/app/_components/Button";

function Logout() {
  return (
    <Button
      onClick={logOutAction}
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
