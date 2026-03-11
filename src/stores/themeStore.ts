import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  isReducedMotion: boolean;
  setReducedMotion: (value: boolean) => void;
  accentColor: string;
  setAccentColor: (color: string) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isReducedMotion: false,
      setReducedMotion: (value) => set({ isReducedMotion: value }),
      accentColor: "blue",
      setAccentColor: (color) => set({ accentColor: color }),
    }),
    {
      name: "theme-storage",
    }
  )
);