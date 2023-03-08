import { useEffect, useRef } from "react";

type PadProps = {
  keyTrigger: string;
  src: string;
  description: string;
  volume: number;
  powered: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
};

export default function Pad({
  src,
  keyTrigger,
  description,
  setDisplay,
  volume,
  powered,
}: PadProps) {
  function playSound() {
    if (powered) {
      setDisplay(description);
      let audio = new Audio(src);
      audio.currentTime = 0;
      audio.play();
      audio.volume = volume;
    }
  }

  function handleClick() {
    playSound();
  }

  function handleKeyPress(e: KeyboardEvent) {
    if (e.key.toUpperCase() === keyTrigger) {
      playSound();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <>
      <button type="button" onClick={handleClick}>
        {/* <audio src={src} id={`${keyTrigger} audio`}></audio> */}
        {keyTrigger}
      </button>
    </>
  );
}
