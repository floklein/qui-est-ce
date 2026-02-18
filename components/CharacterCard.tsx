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
  return (
    <button
      onClick={onToggle}
      aria-pressed={isEliminated}
      className="h-24 w-full cursor-pointer sm:h-28"
      style={{ perspective: "800px" }}
    >
      <div className={`card-inner ${isEliminated ? "flipped" : ""}`}>
        <div className="card-face bg-theme-card text-theme-card-text border-theme-accent border-2 text-base font-semibold shadow-md sm:text-lg">
          {name}
        </div>
        <div className="card-back bg-theme-card-back flex items-center justify-center text-2xl text-white opacity-80">
          ✕
        </div>
      </div>
    </button>
  );
}
