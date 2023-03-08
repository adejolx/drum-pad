import { useEffect, useRef, useState } from "react";
import "./App.css";
import useBanks from "./utils/useBanks";
import { bankOne } from "./data/soundBanks";
import PadGrid from "./components/PadGrid";
import Controls from "./components/Controls";
import Display from "./components/Display";

function App() {
  const { currentBank, toggleBank, display, setDisplay, powered, setPowered } =
    useBanks([bankOne, bankOne]);

  const [volume, setVolume] = useState(0.1);

  function togglePower() {
    setPowered((prev) => !prev);
    setDisplay(currentBank.name);
  }

  function handleVolumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (powered) {
      setVolume(Number(e.target.value));
      setDisplay(`${Math.round(volume * 100)}`);
    }
  }

  return (
    <div className="App">
      <div className="col-1">
        <PadGrid
          powered={powered}
          volume={volume}
          currentBank={currentBank}
          setDisplay={setDisplay}
        />
      </div>
      <div className="col-2">
        <Display display={display} />
        <Controls
          powered={powered}
          togglePower={togglePower}
          toggleBank={toggleBank}
          volume={volume}
          handleVolumeChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}

export default App;
