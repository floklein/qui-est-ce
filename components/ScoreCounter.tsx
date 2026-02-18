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
      <div className="flex items-center gap-3">
      <button
        onClick={onDecrement}
        disabled={score === 0}
        className="bg-theme-accent flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-lg font-bold text-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Diminuer le score"
      >
        −
      </button>
      <span className="text-theme-card-text w-10 text-center text-2xl font-bold">
        {score}
      </span>
      <button
        onClick={onIncrement}
        className="bg-theme-accent flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-lg font-bold text-white transition-opacity hover:opacity-80"
        aria-label="Augmenter le score"
      >
        +
      </button>
      </div>
    </div>
  );
}
