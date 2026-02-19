const LETTER_COLORS: Record<string, string> = {
  A: "#e74c3c",
  B: "#e67e22",
  C: "#f1c40f",
  D: "#2ecc71",
  E: "#1abc9c",
  F: "#3498db",
  G: "#9b59b6",
  H: "#e91e63",
  I: "#00bcd4",
  J: "#ff9800",
  K: "#8bc34a",
  L: "#673ab7",
  M: "#ff5722",
  N: "#009688",
  O: "#795548",
  P: "#607d8b",
  Q: "#c2185b",
  R: "#4caf50",
  S: "#03a9f4",
  T: "#ff4081",
  U: "#7c4dff",
  V: "#00e676",
  W: "#ffc107",
  X: "#76ff03",
  Y: "#ff6e40",
  Z: "#448aff",
};

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
  const color = LETTER_COLORS[firstLetter] || "#999";

  return (
    <button
      onClick={onToggle}
      aria-pressed={isEliminated}
      className="w-full cursor-pointer"
      style={{ perspective: "800px" }}
    >
      <div className={`card-inner ${isEliminated ? "flipped" : ""}`}>
        <div className="card-face bg-theme-card text-theme-card-text border-theme-accent flex-col gap-0.5 border-2 px-2 shadow-md sm:gap-1">
          <span
            className="text-xl font-bold leading-none sm:text-3xl"
            style={{ color }}
          >
            {firstLetter}
          </span>
          <span className="text-sm font-semibold sm:text-base">{name}</span>
        </div>
        <div className="card-back bg-theme-card-back flex items-center justify-center text-2xl text-white opacity-80">
          ✕
        </div>
      </div>
    </button>
  );
}
