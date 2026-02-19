import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <span className="bg-theme-card text-theme-card-text rounded-lg border border-theme-primary/20 px-4 py-1.5 text-lg font-bold shadow-sm">{name}</span>
      <Button
        size="icon"
        onClick={onRefresh}
        className="h-8 w-8 cursor-pointer rounded-full bg-transparent text-theme-primary shadow-none hover:bg-transparent hover:opacity-80"
        aria-label="Changer"
      >
        <RefreshCw size={24} strokeWidth={3} />
      </Button>
      </div>
    </div>
  );
}
