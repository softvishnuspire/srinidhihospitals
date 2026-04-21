import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-container': 'var(--color-primary-container)',
        secondary: 'var(--color-secondary)',
        'secondary-light': 'var(--color-secondary-light)',
        tertiary: 'var(--color-tertiary)',
        accent: 'var(--color-accent)',
        'on-surface': 'var(--color-on-surface)',
        'on-surface-variant': 'var(--color-on-surface-variant)',
        surface: 'var(--color-surface)',
        'surface-container-low': 'var(--color-surface-container-low)',
        'surface-bright': 'var(--color-surface-bright)',
        'surface-container': 'var(--color-surface-container)',
        error: 'var(--color-error)',
        'secondary-container': 'var(--color-secondary-container)',
        'primary-fixed': 'var(--color-primary-fixed)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
      },
      fontFamily: {
        headline: 'var(--font-headline)',
        body: 'var(--font-body)',
      },
      borderRadius: {
        full: 'var(--radius-full)',
        xl: 'var(--radius-xl)',
        lg: 'var(--radius-lg)',
        default: 'var(--radius-default)',
      },
    },
  },
  plugins: [],
} satisfies Config;

