"use client";

import { useGame } from "@/app/_contexts/GameContext";
import HappyFace from "@/app/_images/HappyFace";
import Modal from "@/app/_components/Modal";
import LinkButton from "@/app/_components/LinkButton";

function GameEndModal() {
  const { isPlay, time } = useGame();
  const { minutes, seconds } = time;

  return (
    <>
      {!isPlay && (
        <Modal>
          <div className="size-[130px] sm:size-[160px] lg:size-[190px] mb-[-20px] sm:mb-[-25px] lg:mb-[-26px]">
            <HappyFace />
          </div>
          <div>You are doing great!</div>
          <div>
            {minutes} : {seconds}
          </div>
          <LinkButton
            href="/games"
            color="green"
            addClassName="mt-2 sm:mt-3 lg:mt-4 mb-1 sm:mb-2 lg:mb-3"
          >
            Go Back
          </LinkButton>
        </Modal>
      )}
    </>
  );
}

export default GameEndModal;
