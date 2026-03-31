/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-main':     '#1a1a1a',
        'bg-alt':      '#0f0f0f',
        'bg-card':     '#222222',
        'coral':       '#ff6b5b',
        'coral-hover': '#ff8b76',
        'cyan':        '#00d4d4',
        'cyan-muted':  '#4ecdc4',
        'border-dark': '#2a2a2a',
        'text-muted':  '#999999',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'sans-serif'],
        btn:   ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
