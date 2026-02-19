"use client";

import { useCallback, useState } from "react";
import { RotateCcw } from "lucide-react";
import { CHARACTER_SETS } from "@/config/characters";
import Board from "@/components/Board";
import ThemeSwitch from "@/components/ThemeSwitch";
import MysteryCard from "@/components/MysteryCard";
import ScoreCounter from "@/components/ScoreCounter";

function randomIndex(length: number) {
  return Math.floor(Math.random() * length);
}

export default function Home() {
  const [theme, setTheme] = useState<"red" | "blue">("red");
  const [setIndex, setSetIndex] = useState(0);
  const [eliminated, setEliminated] = useState<Set<number>>(new Set());
  const [mysteryIndex, setMysteryIndex] = useState(0);
  const [score, setScore] = useState(0);

  const characters = CHARACTER_SETS[setIndex].characters;

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
    setMysteryIndex(randomIndex(characters.length));
  }, [characters.length]);

  const changeSet = useCallback((newIndex: number) => {
    setSetIndex(newIndex);
    setEliminated(new Set());
    setMysteryIndex(randomIndex(CHARACTER_SETS[newIndex].characters.length));
  }, []);

  const refreshMystery = useCallback(() => {
    setMysteryIndex(randomIndex(characters.length));
  }, [characters.length]);

  return (
    <div
      data-theme={theme}
      className="bg-theme-bg flex h-svh flex-col overflow-hidden transition-colors duration-300"
    >
      {/* Header */}
      <header className="mb-4 flex flex-wrap items-center justify-between gap-3 px-4 pt-4">
        <h1 className="text-theme-header hidden text-2xl font-bold sm:block sm:text-3xl">
          Qui est-ce ?
        </h1>
        <select
          value={setIndex}
          onChange={(e) => changeSet(Number(e.target.value))}
          className="bg-theme-primary cursor-pointer rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-80"
        >
          {CHARACTER_SETS.map((set, i) => (
            <option key={set.name} value={i}>
              {set.name}
            </option>
          ))}
        </select>
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
          names={characters}
          eliminated={eliminated}
          onToggle={toggleCard}
        />
      </main>

      {/* Bottom bar */}
      <footer className="flex items-center justify-between px-4 py-4">
        <ScoreCounter
          score={score}
          onIncrement={() => setScore((s) => s + 1)}
          onDecrement={() => setScore((s) => Math.max(0, s - 1))}
        />
        <MysteryCard
          name={characters[mysteryIndex]}
          onRefresh={refreshMystery}
        />
      </footer>
    </div>
  );
}
