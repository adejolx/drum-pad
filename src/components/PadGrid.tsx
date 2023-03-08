import { Tbank } from "../data/soundBanks";
import Pad from "./Pad";

type PadGridProps = {
  powered: boolean;
  currentBank: Tbank;
  volume: number;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
};

export default function PadGrid({
  powered,
  currentBank,
  volume,
  setDisplay,
}: PadGridProps) {
  return (
    <>
      {currentBank.samples.map((pad, index) => {
        return (
          <Pad
            key={`pad${index}`}
            keyTrigger={pad.keyTrigger}
            src={pad.audio}
            description={pad.description}
            setDisplay={setDisplay}
            volume={volume}
            powered={powered}
          />
        );
      })}
    </>
  );
}
