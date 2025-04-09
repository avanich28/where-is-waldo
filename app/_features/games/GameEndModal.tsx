"use client";

import { useRouter } from "next/navigation";
import { FaRegFaceLaughWink } from "react-icons/fa6";
import { useGame } from "@/app/_contexts/GameContext";
import Button from "@/app/_components/Button";
import Modal from "@/app/_components/Modal";

function GameEndModal() {
  const router = useRouter();
  const { isPlay, time, reset } = useGame();
  const { minutes, seconds } = time;

  function handleGameEnd() {
    setTimeout(reset, 1000);
    router.push("/games");
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
          <Button onClick={handleGameEnd} color="green" addClassName="mb-2">
            Go Back
          </Button>
        </Modal>
      )}
    </>
  );
}

export default GameEndModal;
