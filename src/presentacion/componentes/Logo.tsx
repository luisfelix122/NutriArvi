import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className, size = 160 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id="nutriarvi-logo-svg"
    >
      {/* Círculo base rosa del logotipo */}
      <circle cx="100" cy="100" r="92" fill="#FF7597" />

      {/* Borde exterior de encaje blanco (ondas circulares) */}
      <circle cx="100" cy="100" r="88" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="6 4" />

      {/* Círculo interno rosado claro */}
      <circle cx="100" cy="100" r="76" fill="#FFE3E7" />
      
      {/* Borde punteado interior del círculo claro */}
      <circle cx="100" cy="100" r="70" fill="none" stroke="#FF7597" strokeWidth="2.5" strokeDasharray="3 4" />

      {/* Ilustración central: Bolsa de galletas */}
      <g transform="translate(100, 75)">
        {/* Nudo / Lazo de la bolsa (Marrón chocolate) */}
        <path d="M-8,-26 C-15,-35 -3,-38 -3,-28 C-3,-38 12,-35 4,-26 C2,-24 -3,-22 -3,-22 C-3,-22 -7,-24 -8,-26 Z" fill="#4E3629" />
        <path d="M-3,-24 L-15,-15" stroke="#4E3629" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M-3,-24 L7,-15" stroke="#4E3629" strokeWidth="2.5" strokeLinecap="round" />

        {/* Bolsa translúcida */}
        <path d="M-22,-20 C-22,-25 18,-25 18,-20 C18,-15 22,12 18,22 C14,32 -14,32 -18,22 C-22,12 -22,-15 -22,-20 Z" fill="#FFFFFF" fillOpacity="0.8" stroke="#4E3629" strokeWidth="2.2" />

        {/* Galleta trasera */}
        <circle cx="2" cy="7" r="14" fill="#D2B48C" stroke="#4E3629" strokeWidth="1.8" />
        {/* Chispas de chocolate galleta trasera */}
        <circle cx="-3" cy="3" r="1.5" fill="#4E3629" />
        <circle cx="5" cy="10" r="1.5" fill="#4E3629" />
        <circle cx="3" cy="2" r="1.5" fill="#4E3629" />

        {/* Galleta delantera (encima) */}
        <circle cx="-4" cy="5" r="15" fill="#C5A059" stroke="#4E3629" strokeWidth="2" />
        {/* Chispas de chocolate galleta delantera */}
        <circle cx="-9" cy="0" r="2" fill="#4E3629" />
        <circle cx="1" cy="7" r="2" fill="#4E3629" />
        <circle cx="-5" cy="9" r="1.8" fill="#4E3629" />
        <circle cx="-1" cy="0" r="2" fill="#4E3629" />
      </g>

      {/* Cinta rosa de fondo para el texto */}
      <path d="M34,130 C34,130 100,140 166,130 L166,145 C166,145 100,158 34,145 Z" fill="#FF7597" opacity="0.3" />

      {/* Texto Principal: NUTRIARVI */}
      <text
        x="100"
        y="142"
        fontFamily="var(--fuente-principal)"
        fontSize="17.5"
        fontWeight="900"
        fill="#4E3629"
        textAnchor="middle"
        letterSpacing="1.2"
      >
        NUTRIARVI
      </text>

      {/* Subtexto: El Poder nutritivo */}
      <text
        x="100"
        y="158"
        fontFamily="var(--fuente-principal)"
        fontSize="9.5"
        fontWeight="500"
        fontStyle="italic"
        fill="#705345"
        textAnchor="middle"
      >
        El Poder nutritivo
      </text>

      {/* Estrellitas blancas decorativas */}
      <polygon points="56,120 58,124 63,124 59,127 61,131 56,128 52,131 54,127 50,124 55,124" fill="#FFFFFF" />
      <polygon points="144,120 146,124 151,124 147,127 149,131 144,128 140,131 142,127 138,124 143,124" fill="#FFFFFF" />
    </svg>
  );
};
export default Logo;
