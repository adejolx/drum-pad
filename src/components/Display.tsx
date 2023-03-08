type DisplayProps = {
  display: string | number;
};
export default function Display({ display }: DisplayProps) {
  return <div>{display}</div>;
}
