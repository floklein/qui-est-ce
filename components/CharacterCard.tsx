function letterColor(letter: string): string {
  const index = letter.charCodeAt(0) - 65; // A=0, Z=25
  const hue = (index / 26) * 330; // 0° (red) → 330° (violet)
  return `hsl(${hue}, 75%, 50%)`;
}

interface CharacterCardProps {
  name: string;
  isEliminated: boolean;
  onToggle: () => void;
}

export default function CharacterCard({
  name,
  isEliminated,
  onToggle,
}: CharacterCardProps) {
  const firstLetter = name.charAt(0).toUpperCase();
  const color = letterColor(firstLetter);

  return (
    <button
      onClick={onToggle}
      aria-pressed={isEliminated}
      className="w-full cursor-pointer"
      style={{ perspective: "800px" }}
    >
      <div className={`card-inner ${isEliminated ? "flipped" : ""}`}>
        <div className="card-face bg-theme-card text-theme-card-text border-theme-primary/20 flex-col gap-0.5 border px-2 shadow-sm sm:gap-1">
          <span
            className="text-2xl font-bold leading-none sm:text-4xl"
            style={{ color }}
          >
            {firstLetter}
          </span>
          <span className="text-base font-medium sm:text-lg">{name}</span>
        </div>
        <div className="card-back bg-theme-card-back flex items-center justify-center text-2xl text-white opacity-80">
          ✕
        </div>
      </div>
    </button>
  );
}
