"use client";

import { FaRegFaceLaughWink } from "react-icons/fa6";
import { useGame } from "@/app/_contexts/GameContext";
import Modal from "@/app/_components/Modal";
import LinkButton from "@/app/_components/LinkButton";

function GameEndModal() {
  const { isPlay, time } = useGame();
  const { minutes, seconds } = time;

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
          <LinkButton href="/games" color="green" addClassName="mb-2">
            Go Back
          </LinkButton>
        </Modal>
      )}
    </>
  );
}

export default GameEndModal;
