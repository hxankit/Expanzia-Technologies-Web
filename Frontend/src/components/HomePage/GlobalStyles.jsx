import React from 'react';

const GlobalStyles = () => (
  <style>{`
    body { background-color: #111827; font-family: 'Inter', sans-serif; }
    @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    .animate-spin-slow { animation: spin-slow 15s linear infinite; }
    @keyframes scroll-x { from { transform: translateX(0); } to { transform: translateX(-100%); } }
    .animate-scroll-x { animation: scroll-x 30s linear infinite; width: 200%; display: flex; }
  `}</style>
);

export default GlobalStyles;
