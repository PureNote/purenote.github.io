/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#071B2B',
          card: '#0C293F',
          workspace: '#0F324D',
        },
        teal: {
          DEFAULT: '#167D8D',
        },
        aqua: {
          DEFAULT: '#B9E4E8',
        },
        platinum: {
          DEFAULT: '#EEEEEE',
        },
        paper: {
          DEFAULT: '#FFFFFF',
        },
        theme: {
          bg: 'var(--bg-primary)',
          surface: 'var(--bg-surface-card)',
          workspace: 'var(--workspace-box-bg)',
          btn: 'var(--primary-action-button)',
          'btn-hover': 'var(--primary-action-hover)',
          'btn-text': 'var(--primary-action-text)',
          accent: 'var(--secondary-accent-surface)',
          pill: 'var(--highlight-pill-badge)',
          border: 'var(--border-color)',
          text: 'var(--text-primary)',
          'text-sec': 'var(--text-secondary)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      boxShadow: {
        workspace: '0 20px 50px -12px rgba(7, 27, 43, 0.14)',
        'workspace-dark': '0 20px 50px -12px rgba(0, 0, 0, 0.55)',
        glow: '0 0 0 4px rgba(185, 228, 232, 0.55)',
        'glow-teal': '0 0 0 4px rgba(22, 125, 141, 0.45)',
      },
    },
  },
  plugins: [],
};
