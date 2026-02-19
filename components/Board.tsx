import CharacterCard from "./CharacterCard";

interface BoardProps {
  names: readonly string[];
  eliminated: Set<number>;
  onToggle: (index: number) => void;
}

export default function Board({ names, eliminated, onToggle }: BoardProps) {
  return (
    <div className="grid h-full grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-6">
      {names.map((name, i) => (
        <CharacterCard
          key={i}
          name={name}
          isEliminated={eliminated.has(i)}
          onToggle={() => onToggle(i)}
        />
      ))}
    </div>
  );
}
