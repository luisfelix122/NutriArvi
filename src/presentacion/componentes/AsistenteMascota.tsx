import React from 'react';

interface AsistenteMascotaProps {
  pestanaActiva: string;
}

export const AsistenteMascota: React.FC<AsistenteMascotaProps> = ({ pestanaActiva }) => {
  // Mensajes explicativos en español peruano para potenciales inversionistas
  const obtenerMensajeExplicativo = () => {
    switch (pestanaActiva) {
      case 'balance':
        return (
          <>
            <strong>¡Hola! Soy Arvejito, el guardián de la receta. 🌱</strong><br />
            Para los inversionistas, el balance de materia es clave: garantizamos un <strong>12% de merma</strong> en horneado, lo que mantiene el producto crocante y en su peso exacto de <strong>8.58 g</strong>. ¡Producimos exactamente 90 mini galletas por lote para llenar 10 bolsas comerciales sin desperdiciar nada de masa!
          </>
        );
      case 'formulacion':
        return (
          <>
            <strong>¡Mira la calidad de nuestra fórmula! 🥣</strong><br />
            La <strong>harina de arveja es casi el 40%</strong> de la mezcla bruta. Esto nos da un perfil nutricional proteico altísimo. Lo mejor es la economía de escala: cada lote completo de insumos de alta calidad nos cuesta apenas <strong>S/ 8.08</strong> en compras prorrateadas.
          </>
        );
      case 'costos':
        return (
          <>
            <strong>📈 ¡Hablemos de rentabilidad y negocio redondo!</strong><br />
            El costo unitario de producción por bolsa es de <strong>S/ 1.57</strong> (incluyendo insumos, empaque, sticker y CIF prorrateado). Al venderlo al precio sugerido de <strong>S/ 2.00</strong>, obtenemos un <strong>margen de ganancia neto del 21.3% (S/ 0.43 de ganancia directa por unidad)</strong>. ¡Excelente para un snack saludable!
          </>
        );
      case 'proyecciones':
        return (
          <>
            <strong>💰 ¡Mira cómo escala nuestro negocio en Piura!</strong><br />
            Nuestro punto de equilibrio mensual es bajísimo: solo necesitas vender <strong>236 bolsas</strong> para cubrir costos fijos (S/ 210.00). Si alcanzamos el escenario moderado de 450 bolsas, generamos una utilidad neta de <strong>S/ 191.40</strong>, y en el optimista de 650 bolsas sube a <strong>S/ 369.80</strong>. ¡Mueve el simulador y mira los números crecer!
          </>
        );
      default:
        return <>¡Hola! Soy Arvejito. Estoy aquí para ayudarte a analizar la rentabilidad de las galletas NutriArvi.</>;
    }
  };

  return (
    <div className="mascota-contenedor animar-mascota" id="asistente-arvejito">
      {/* Diálogo / Bocadillo de texto */}
      <div className="mascota-bocadillo">
        <p className="mascota-texto">{obtenerMensajeExplicativo()}</p>
        <span className="mascota-triangulo"></span>
      </div>

      {/* Ilustración de Arvejito */}
      <div className="mascota-svg-caja">
        <svg width="90" height="90" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {/* Sombras base */}
          <ellipse cx="50" cy="90" rx="25" ry="5" fill="#4E3629" opacity="0.15" />

          {/* Cuerpo verde de la arveja */}
          <defs>
            <radialGradient id="brilloArveja2" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#A5DB43" />
              <stop offset="70%" stopColor="var(--verde-arveja)" />
              <stop offset="100%" stopColor="#5D821C" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="55" r="32" fill="url(#brilloArveja2)" stroke="#4E3629" strokeWidth="2.2" />

          {/* Gorro de chef blanco */}
          <g transform="translate(50, 14)">
            <path d="M-15,12 C-22,6 -20,-8 -10,-8 C-10,-12 0,-15 5,-8 C12,-15 22,-8 15,12 Z" fill="#FFFFFF" stroke="#4E3629" strokeWidth="2" />
            <rect x="-14" y="8" width="28" height="6" rx="2" fill="#FFFFFF" stroke="#4E3629" strokeWidth="2" />
          </g>

          {/* Ojos */}
          <circle cx="40" cy="50" r="4.5" fill="#4E3629" />
          <circle cx="38" cy="48" r="1.5" fill="#FFFFFF" />
          
          <circle cx="60" cy="50" r="4.5" fill="#4E3629" />
          <circle cx="58" cy="48" r="1.5" fill="#FFFFFF" />

          {/* Mejillas sonrojadas */}
          <ellipse cx="34" cy="56" rx="4" ry="2.5" fill="#FF7597" opacity="0.5" />
          <ellipse cx="66" cy="56" rx="4" ry="2.5" fill="#FF7597" opacity="0.5" />

          {/* Sonrisa */}
          <path d="M44,58 Q50,65 56,58" stroke="#4E3629" strokeWidth="2.2" fill="none" strokeLinecap="round" />

          {/* Brazos */}
          <path d="M20,58 Q12,50 14,44" stroke="#4E3629" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="14" cy="44" r="2.5" fill="var(--verde-arveja)" stroke="#4E3629" strokeWidth="1.5" />

          <path d="M78,60 Q84,65 82,58" stroke="#4E3629" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="84" cy="54" r="7" fill="#D2B48C" stroke="#4E3629" strokeWidth="1.5" />
          <circle cx="82" cy="51" r="1" fill="#4E3629" />
          <circle cx="86" cy="56" r="1" fill="#4E3629" />
          <circle cx="84" cy="53" r="1" fill="#4E3629" />

          {/* Patitas */}
          <rect x="42" y="86" width="6" height="6" rx="2" fill="#FFFFFF" stroke="#4E3629" strokeWidth="1.8" />
          <rect x="52" y="86" width="6" height="6" rx="2" fill="#FFFFFF" stroke="#4E3629" strokeWidth="1.8" />
        </svg>
      </div>
    </div>
  );
};

export default AsistenteMascota;
