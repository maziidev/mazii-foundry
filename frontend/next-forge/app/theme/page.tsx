'use client';

import useThemeStore from '@/store/themeStore';
import { useEffect, useState } from 'react';

export default function ThemePage() {
  const { theme, mode, toggleTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`min-h-screen p-8 ${theme.background}`}>
      {/* Nav */}
      <nav
        className={`${theme.nav} fixed top-0 left-0 right-0 px-8 py-4 flex justify-between items-center`}>
        <p className={`font-bold text-xl ${theme.textPrimary}`}>Next Forge</p>
        {mounted && (
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-lg font-medium ${theme.buttonSecondary}`}>
            {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        )}
      </nav>

      {/* Content */}
      {mounted && (
        <div className="mt-24 max-w-2xl mx-auto flex flex-col gap-6">
          {/* Card */}
          <div className={`p-6 rounded-xl ${theme.card} ${theme.cardHover}`}>
            <p className={`text-2xl font-bold ${theme.textPrimary}`}>
              Theme System
            </p>
            <p className={`mt-2 ${theme.textSecondary}`}>
              Current mode: {mode}
            </p>
            <span
              className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium ${theme.badge}`}>
              {mode === 'light' ? 'Light Mode' : 'Dark Mode'}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className={`px-4 py-2 rounded-lg ${theme.buttonPrimary}`}>
              Primary
            </button>
            <button className={`px-4 py-2 rounded-lg ${theme.buttonSecondary}`}>
              Secondary
            </button>
            <button className={`px-4 py-2 rounded-lg ${theme.buttonDanger}`}>
              Danger
            </button>
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Type something..."
            className={`w-full px-4 py-2 rounded-lg border ${theme.input}`}
          />
        </div>
      )}
    </div>
  );
}
