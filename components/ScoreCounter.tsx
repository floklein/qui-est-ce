import { Button } from "@/components/ui/button";

interface ScoreCounterProps {
  score: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function ScoreCounter({
  score,
  onIncrement,
  onDecrement,
}: ScoreCounterProps) {
  return (
    <div className="flex items-center gap-2 sm:flex-col">
      <span className="text-theme-header hidden text-xs font-semibold uppercase tracking-wide sm:inline">
        Score
      </span>
      <div className="flex items-center gap-1">
      <Button
        size="icon"
        onClick={onDecrement}
        disabled={score === 0}
        className="h-9 w-9 cursor-pointer rounded-full bg-transparent text-lg font-bold text-theme-accent shadow-none hover:bg-transparent hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Diminuer le score"
      >
        −
      </Button>
      <span className="text-theme-card-text w-8 text-center text-xl font-bold">
        {score}
      </span>
      <Button
        size="icon"
        onClick={onIncrement}
        className="h-9 w-9 cursor-pointer rounded-full bg-transparent text-lg font-bold text-theme-accent shadow-none hover:bg-transparent hover:opacity-80"
        aria-label="Augmenter le score"
      >
        +
      </Button>
      </div>
    </div>
  );
}
