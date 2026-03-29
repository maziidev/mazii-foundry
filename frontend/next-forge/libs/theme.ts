export const themes = {
  light: {
    // Backgrounds
    background: 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100',
    surface: 'bg-white',
    surfaceAlt: 'bg-slate-100',

    // Text
    textPrimary: 'text-slate-900',
    textSecondary: 'text-slate-500',
    textMuted: 'text-slate-400',

    // Borders
    border: 'border-slate-200',

    // Buttons
    buttonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
    buttonSecondary: 'bg-slate-200 hover:bg-slate-300 text-slate-800',
    buttonDanger: 'bg-red-500 hover:bg-red-600 text-white',

    // Accents
    accent: 'text-blue-600',
    accentBg: 'bg-blue-50',

    // Cards
    card: 'bg-white border border-slate-200 shadow-sm',
    cardHover: 'hover:shadow-md hover:border-blue-200',

    // Input
    input:
      'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-blue-500',

    // Nav
    nav: 'bg-white/80 backdrop-blur-md border-b border-slate-200',

    // Badge
    badge: 'bg-blue-100 text-blue-700',
  },

  dark: {
    // Backgrounds
    background: 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950',
    surface: 'bg-slate-800',
    surfaceAlt: 'bg-slate-700',

    // Text
    textPrimary: 'text-slate-50',
    textSecondary: 'text-slate-400',
    textMuted: 'text-slate-500',

    // Borders
    border: 'border-slate-700',

    // Buttons
    buttonPrimary: 'bg-blue-500 hover:bg-blue-600 text-white',
    buttonSecondary: 'bg-slate-700 hover:bg-slate-600 text-slate-100',
    buttonDanger: 'bg-red-500 hover:bg-red-600 text-white',

    // Accents
    accent: 'text-blue-400',
    accentBg: 'bg-blue-950',

    // Cards
    card: 'bg-slate-800 border border-slate-700 shadow-sm',
    cardHover: 'hover:shadow-lg hover:border-blue-500',

    // Input
    input:
      'bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:ring-blue-400',

    // Nav
    nav: 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700',

    // Badge
    badge: 'bg-blue-900 text-blue-300',
  },
};

export type ThemeMode = 'light' | 'dark';
export type Theme = typeof themes.light;
