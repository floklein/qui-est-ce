"use client";

import { useCallback, useState } from "react";
import { RotateCcw } from "lucide-react";
import { DEFAULT_CHARACTERS } from "@/config/characters";
import Board from "@/components/Board";
import ThemeSwitch from "@/components/ThemeSwitch";
import MysteryCard from "@/components/MysteryCard";
import ScoreCounter from "@/components/ScoreCounter";

function randomIndex(length: number) {
  return Math.floor(Math.random() * length);
}

export default function Home() {
  const [theme, setTheme] = useState<"red" | "blue">("red");
  const [eliminated, setEliminated] = useState<Set<number>>(new Set());
  const [mysteryIndex, setMysteryIndex] = useState(0);
  const [score, setScore] = useState(0);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "red" ? "blue" : "red"));
  }, []);

  const toggleCard = useCallback((index: number) => {
    setEliminated((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setEliminated(new Set());
    setMysteryIndex(randomIndex(DEFAULT_CHARACTERS.length));
  }, []);

  const refreshMystery = useCallback(() => {
    setMysteryIndex(randomIndex(DEFAULT_CHARACTERS.length));
  }, []);

  return (
    <div
      data-theme={theme}
      className="bg-theme-bg flex h-svh flex-col overflow-hidden transition-colors duration-300"
    >
      {/* Header */}
      <header className="mb-4 flex flex-wrap items-center justify-between gap-3 px-4 pt-4">
        <h1 className="text-theme-header text-2xl font-bold sm:text-3xl">
          Qui est-ce ?
        </h1>
        <div className="flex items-center gap-3">
          <ThemeSwitch theme={theme} onToggle={toggleTheme} />
          <button
            onClick={reset}
            className="bg-theme-primary cursor-pointer rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-80"
          >
            <RotateCcw size={18} className="inline sm:hidden" />
            <span className="hidden sm:inline">Recommencer</span>
          </button>
        </div>
      </header>

      {/* Board */}
      <main className="min-h-0 flex-1 overflow-y-auto p-4">
        <Board
          names={DEFAULT_CHARACTERS}
          eliminated={eliminated}
          onToggle={toggleCard}
        />
      </main>

      {/* Bottom bar */}
      <footer className="flex items-center justify-between px-4 pb-4">
        <ScoreCounter
          score={score}
          onIncrement={() => setScore((s) => s + 1)}
          onDecrement={() => setScore((s) => Math.max(0, s - 1))}
        />
        <MysteryCard
          name={DEFAULT_CHARACTERS[mysteryIndex]}
          onRefresh={refreshMystery}
        />
      </footer>
    </div>
  );
}
