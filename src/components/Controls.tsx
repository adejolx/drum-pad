type ControlsProps = {
  powered: boolean;
  togglePower: () => void;
  volume: number;
  handleVolumeChange: React.ChangeEventHandler<HTMLInputElement>;
  toggleBank: () => void;
};

export default function Controls({
  powered,
  togglePower,
  volume,
  handleVolumeChange,
  toggleBank,
}: ControlsProps) {
  return (
    <>
      <button type="button" onClick={togglePower}>
        {powered ? "OFF" : "ON"}
      </button>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={handleVolumeChange}
      />
      <button type="button" onClick={toggleBank}></button>
    </>
  );
}
