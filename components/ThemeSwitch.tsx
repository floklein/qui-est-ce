interface ThemeSwitchProps {
  theme: "red" | "blue";
  onToggle: () => void;
}

export default function ThemeSwitch({ theme, onToggle }: ThemeSwitchProps) {
  return (
    <button
      onClick={onToggle}
      className="relative flex h-9 w-36 cursor-pointer items-center rounded-full bg-gray-200 p-1 transition-colors"
      aria-label={`Thème actuel : ${theme === "red" ? "rouge" : "bleu"}`}
    >
      <span
        className={`absolute h-7 w-[calc(50%-4px)] rounded-full transition-all duration-300 ${
          theme === "red"
            ? "left-1 bg-red-500"
            : "left-[calc(50%+2px)] bg-blue-500"
        }`}
      />
      <span
        className={`z-10 flex-1 text-center text-sm font-semibold transition-colors ${
          theme === "red" ? "text-white" : "text-gray-600"
        }`}
      >
        Rouge
      </span>
      <span
        className={`z-10 flex-1 text-center text-sm font-semibold transition-colors ${
          theme === "blue" ? "text-white" : "text-gray-600"
        }`}
      >
        Bleu
      </span>
    </button>
  );
}
