"use client";

import Button from "@/app/_components/Button";
import Modal from "@/app/_components/Modal";
import { useGame } from "@/app/_contexts/GameContext";
import { useRouter } from "next/navigation";
import { FaRegFaceLaughWink } from "react-icons/fa6";

function GameEndModal() {
  const { isPlay, setTimeCount, minutes, seconds } = useGame();
  const router = useRouter();

  function onClick() {
    router.push("/games");
    setTimeCount(0);
  }

  return (
    <>
      {!isPlay && (
        <Modal>
          <div className="pt-4 text-[3em] sm:text-[4em]">
            <FaRegFaceLaughWink />
          </div>
          <div className="font-semibold text-xl sm:text-2xl">
            You are doing great!
          </div>
          <div className="font-semibold text-xl sm:text-2xl">
            {minutes} : {seconds}
          </div>
          <Button onClick={onClick} color="green" addClassName="mb-2">
            Go Back
          </Button>
        </Modal>
      )}
    </>
  );
}

export default GameEndModal;
