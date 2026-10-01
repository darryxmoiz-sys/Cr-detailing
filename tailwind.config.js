module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: { extend: {
    colors: {
      navy: '#070d1f', deep: '#0c1530', panel: '#101a3a',
      ice: '#3ab6ff', ice2: '#7fd9ff', chrome: '#dfe7f3',
    },
    fontFamily: { display: ['var(--font-display)', 'system-ui', 'sans-serif'], body: ['var(--font-body)', 'system-ui', 'sans-serif'] },
    boxShadow: {
      glow: '0 0 20px rgba(58,182,255,.55), 0 0 60px rgba(58,182,255,.25)',
      glowLg: '0 0 40px rgba(58,182,255,.6), 0 0 100px rgba(58,182,255,.3)',
    },
    keyframes: {
      pulseGlow: { '0%,100%': { boxShadow: '0 0 18px rgba(58,182,255,.55), 0 0 44px rgba(58,182,255,.25)' }, '50%': { boxShadow: '0 0 28px rgba(58,182,255,.85), 0 0 70px rgba(58,182,255,.4)' } },
      pulseGlowGreen: { '0%,100%': { boxShadow: '0 0 18px rgba(37,211,102,.55), 0 0 44px rgba(37,211,102,.25)' }, '50%': { boxShadow: '0 0 28px rgba(37,211,102,.85), 0 0 70px rgba(37,211,102,.4)' } },
      drift: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-18px)' } },
    },
    animation: { pulseGlow: 'pulseGlow 2.4s ease-in-out infinite', pulseGlowGreen: 'pulseGlowGreen 2.4s ease-in-out infinite', drift: 'drift 7s ease-in-out infinite' },
  } },
  plugins: [],
};
