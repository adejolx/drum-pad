import { useState } from "react";
import { Tbank } from "../data/soundBanks";

type ArrayofMaxLength2 = readonly [Tbank, Tbank];
export default function useBanks(arg: ArrayofMaxLength2) {
  const [powered, setPowered] = useState(false);
  const [currentBank, setCurrentBank] = useState(arg[0]);
  const [display, setDisplay] = useState("");

  function toggleBank() {
    if (powered) {
      if (currentBank === arg[0]) setCurrentBank(arg[1]);
      else setCurrentBank(arg[0]);
      setDisplay(currentBank.name);
    }
  }

  return {
    currentBank,
    toggleBank,
    display,
    setDisplay,
    powered,
    setPowered,
  };
}
