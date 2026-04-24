export const themes = {
  light: {
    name: 'light',
    colors: {
      background: '#ffffff',
      backgroundSecondary: '#f5f0eb',
      backgroundTertiary: '#ece5db',
      text: '#1a1207',
      textSecondary: '#5c3d1e',
      textMuted: '#8b6241',
      primary: '#2d6a4f',
      primaryHover: '#1b4332',
      accent: '#9c6b38',
      border: '#d4c4ae',
      card: '#ffffff',
      cardHover: '#f5f0eb',
      shadow: 'rgba(45, 106, 79, 0.1)',
      overlay: 'rgba(26, 18, 7, 0.6)',
    },
  },
  dark: {
    name: 'dark',
    colors: {
      background: '#0f172a',
      backgroundSecondary: '#1e293b',
      backgroundTertiary: '#334155',
      text: '#f1f5f9',
      textSecondary: '#94a3b8',
      textMuted: '#64748b',
      primary: '#60a5fa',
      primaryHover: '#3b82f6',
      accent: '#a78bfa',
      border: '#334155',
      card: '#1e293b',
      cardHover: '#334155',
      shadow: 'rgba(0, 0, 0, 0.3)',
      overlay: 'rgba(0, 0, 0, 0.7)',
    },
  },
}

export const getThemeCSS = (theme) => {
  const { colors } = themes[theme]
  return {
    '--color-background': colors.background,
    '--color-background-secondary': colors.backgroundSecondary,
    '--color-background-tertiary': colors.backgroundTertiary,
    '--color-text': colors.text,
    '--color-text-secondary': colors.textSecondary,
    '--color-text-muted': colors.textMuted,
    '--color-primary': colors.primary,
    '--color-primary-hover': colors.primaryHover,
    '--color-accent': colors.accent,
    '--color-border': colors.border,
    '--color-card': colors.card,
    '--color-card-hover': colors.cardHover,
    '--color-shadow': colors.shadow,
    '--color-overlay': colors.overlay,
  }
}