import type { Theme, ThemeMode } from '@/libs/theme';
import { themes } from '@/libs/theme';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeStore {
  mode: ThemeMode;
  theme: Theme;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: 'light' as ThemeMode,
      theme: themes.light,

      toggleTheme: () =>
        set((state) => ({
          mode: state.mode === 'light' ? 'dark' : 'light',
          theme: state.mode === 'light' ? themes.dark : themes.light,
        })),
    }),
    { name: 'theme-store' },
  ),
);

export default useThemeStore;
