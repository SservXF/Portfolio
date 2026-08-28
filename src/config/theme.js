export const themes = {
  light: {
    name: 'light',
    colors: {
      background: '#faf7ef',
      backgroundSecondary: '#f1ecdc',
      backgroundTertiary: '#e3e6d0',
      text: '#232a1b',
      textSecondary: '#535a3f',
      textMuted: '#6e7355',
      primary: '#4f7a31',
      primaryHover: '#3d5f26',
      onPrimary: '#ffffff',
      accent: '#c9713d',
      border: '#ded6bc',
      card: '#fffdf7',
      cardHover: '#f5efdd',
      shadow: 'rgba(79, 122, 49, 0.14)',
      overlay: 'rgba(30, 34, 22, 0.65)',
    },
  },
  dark: {
    name: 'dark',
    colors: {
      background: '#12150f',
      backgroundSecondary: '#1a1e14',
      backgroundTertiary: '#262b1b',
      text: '#f1eee1',
      textSecondary: '#b9c0a1',
      textMuted: '#7c8468',
      primary: '#8fbb5c',
      primaryHover: '#a6cd78',
      onPrimary: '#12150f',
      accent: '#e2965e',
      border: '#2a301d',
      card: '#181c12',
      cardHover: '#212615',
      shadow: 'rgba(0, 0, 0, 0.45)',
      overlay: 'rgba(0, 0, 0, 0.75)',
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
    '--color-on-primary': colors.onPrimary,
    '--color-accent': colors.accent,
    '--color-border': colors.border,
    '--color-card': colors.card,
    '--color-card-hover': colors.cardHover,
    '--color-shadow': colors.shadow,
    '--color-overlay': colors.overlay,
  }
}
