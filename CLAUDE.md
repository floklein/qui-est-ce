# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Qui est-ce" — a Next.js 16 application using the App Router, React 19, TypeScript, and Tailwind CSS v4.

## Commands

- `npm run dev` — Start development server (http://localhost:3000)
- `npm run build` — Production build
- `npm run lint` — Run ESLint (flat config, ESLint 9)

## Tech Stack

- **Next.js 16** with App Router (`app/` directory)
- **React 19** with Server Components by default
- **TypeScript** (strict mode)
- **Tailwind CSS v4** via `@tailwindcss/postcss` plugin — uses `@import "tailwindcss"` and `@theme inline` syntax in `app/globals.css`
- **Geist** font family loaded via `next/font/google`

## Architecture

- Uses Next.js App Router — all pages/layouts live under `app/`
- Path alias: `@/*` maps to the project root
- ESLint uses flat config (`eslint.config.mjs`) with `next/core-web-vitals` and `next/typescript` presets
- CSS custom properties for theming (`--background`, `--foreground`) with dark mode via `prefers-color-scheme`
- Character sets defined in `config/characters.ts` — each set has a name and 24 characters
- Game components live in `components/` (Board, MysteryCard, ScoreCounter, ThemeSwitch)
