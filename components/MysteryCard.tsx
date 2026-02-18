import { RefreshCw } from "lucide-react";

interface MysteryCardProps {
  name: string;
  onRefresh: () => void;
}

export default function MysteryCard({ name, onRefresh }: MysteryCardProps) {
  return (
    <div className="flex items-center gap-2 sm:flex-col">
      <span className="text-theme-header hidden text-xs font-semibold uppercase tracking-wide sm:inline">
        Personnage mystère
      </span>
      <div className="flex items-center gap-2">
      <span className="text-theme-card-text text-lg font-bold">{name}</span>
      <button
        onClick={onRefresh}
        className="bg-theme-accent flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-white transition-opacity hover:opacity-80"
        aria-label="Changer"
      >
        <RefreshCw size={16} />
      </button>
      </div>
    </div>
  );
}
