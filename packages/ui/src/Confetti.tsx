import { useWindowSize } from "react-use";
import ReactConfetti from "react-confetti";

export function Confetti({ colors = ["#0ea5e9", "#eee"] }: { colors?: string[] }) {
  const { width, height } = useWindowSize();
  return (
    <ReactConfetti width={width - 50} height={height} colors={colors} numberOfPieces={400} recycle={false} />
  );
}
