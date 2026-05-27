import React from 'react';

interface AsistenteMascotaProps {
  pestanaActiva: string;
  tourActivo: boolean;
  pasoTour: number;
  onSiguiente: () => void;
  onAnterior: () => void;
  onDetener: () => void;
}

export const AsistenteMascota: React.FC<AsistenteMascotaProps> = ({
  pestanaActiva,
  tourActivo,
  pasoTour,
  onSiguiente,
  onAnterior,
  onDetener,
}) => {
  // Textos e instrucciones del Tour interactivo para inversores
  const MENSAJES_TOUR = [
    {
      titulo: "1. Mezcla de Masa Bruta 🥣",
      texto: "¡Hola! Iniciemos nuestro tour de inversión en Piura. Primero, mezclamos todos los insumos sólidos y líquidos, obteniendo exactamente 878.00 gramos de masa bruta por lote de producción."
    },
    {
      titulo: "2. La Merma en Horneado 🔥",
      texto: "Al hornear, las galletas pierden un 12% de su peso (-105.36 gramos) por deshidratación natural del agua. Esto es clave: garantiza la crocantez sin usar persevantes químicos."
    },
    {
      titulo: "3. Rendimiento Comercial 📦",
      texto: "Obtenemos una masa neta horneada total de 772.64 gramos por lote. Esto equivale a 90 mini galletas, las cuales empacamos en 10 bolsas de 9 unidades cada una. ¡Eficiencia del 100% sin saldos sobrantes!"
    },
    {
      titulo: "4. Harina de Arveja (Insumo clave) 🌱",
      texto: "¡Pasemos a la receta! La Harina de Arveja representa casi el 40% del peso del lote (350 g). Esto le da a NutriArvi un perfil proteico alto y natural, diferenciándonos en el mercado."
    },
    {
      titulo: "5. Costo total de ingredientes 💰",
      texto: "Preparamos un lote completo de ingredientes por apenas S/ 8.08. Gracias a la arveja y a compras mayoristas eficientes, logramos un costo de materia prima sumamente competitivo."
    },
    {
      titulo: "6. Costo unitario de producción 📈",
      texto: "¡Hablemos del costo unitario! Producir una bolsa de galletas cuesta S/ 1.57 en total (S/ 0.81 de receta, S/ 0.30 de bolsa y sticker, y S/ 0.47 de costos indirectos CIF como gas y luz)."
    },
    {
      titulo: "7. Precio sugerido y margen neto 💸",
      texto: "Al vender cada bolsa al PVP sugerido de S/ 2.00, aseguramos un margen neto de ganancia del 21.3% (equivalente a S/ 0.43 de ganancia neta por bolsa). ¡Excelente retorno unitario!"
    },
    {
      titulo: "8. El Punto de Equilibrio mensual ⚖️",
      texto: "¡Llegamos a las proyecciones! Nuestro punto de equilibrio mensual es bajísimo: solo necesitas vender 236 bolsas al mes (S/ 472.00 en ventas) para cubrir costos y empezar a generar utilidad neta."
    },
    {
      titulo: "9. Escenarios y Simulador interactivo 🚀",
      texto: "Vendiendo 650 bolsas mensuales obtienes S/ 369.80 de ganancia neta. Mueve el deslizador a tu gusto para simular tu inversión deseada. ¡Fin del tour! Pide ya tus galletas para abastecer tu proyección."
    }
  ];

  // Mensaje estático convencional de pestaña
  const obtenerMensajeExplicativoTab = () => {
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
        {tourActivo ? (
          <div style={estilos.tourCuerpo}>
            <div style={estilos.tourHeader}>
              <strong style={estilos.tourTitulo}>{MENSAJES_TOUR[pasoTour].titulo}</strong>
              <span style={estilos.tourPasoBadge}>Paso {pasoTour + 1} de 9</span>
            </div>
            <p className="mascota-texto" style={estilos.tourTexto}>{MENSAJES_TOUR[pasoTour].texto}</p>
            
            <div style={estilos.tourAcciones}>
              <button
                onClick={onAnterior}
                disabled={pasoTour === 0}
                style={{
                  ...estilos.tourBotonSecundario,
                  opacity: pasoTour === 0 ? 0.4 : 1,
                  cursor: pasoTour === 0 ? 'not-allowed' : 'pointer'
                }}
                id="tour-anterior"
              >
                Anterior
              </button>
              <button
                onClick={onDetener}
                style={estilos.tourBotonSalir}
                id="tour-salir"
              >
                Salir
              </button>
              <button
                onClick={pasoTour === 8 ? onDetener : onSiguiente}
                style={estilos.tourBotonSiguiente}
                id="tour-siguiente"
              >
                {pasoTour === 8 ? "Finalizar" : "Siguiente"}
              </button>
            </div>
          </div>
        ) : (
          <p className="mascota-texto">{obtenerMensajeExplicativoTab()}</p>
        )}
        <span className="mascota-triangulo"></span>
      </div>

      {/* Ilustración de Arvejito */}
      <div className="mascota-svg-caja">
        <svg width="90" height="90" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="90" rx="25" ry="5" fill="#4E3629" opacity="0.15" />

          <defs>
            <radialGradient id="brilloArvejaTour" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#A5DB43" />
              <stop offset="70%" stopColor="var(--verde-arveja)" />
              <stop offset="100%" stopColor="#5D821C" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="55" r="32" fill="url(#brilloArvejaTour)" stroke="#4E3629" strokeWidth="2.2" />

          {/* Gorro de chef */}
          <g transform="translate(50, 14)">
            <path d="M-15,12 C-22,6 -20,-8 -10,-8 C-10,-12 0,-15 5,-8 C12,-15 22,-8 15,12 Z" fill="#FFFFFF" stroke="#4E3629" strokeWidth="2" />
            <rect x="-14" y="8" width="28" height="6" rx="2" fill="#FFFFFF" stroke="#4E3629" strokeWidth="2" />
          </g>

          {/* Ojos */}
          <circle cx="40" cy="50" r="4.5" fill="#4E3629" />
          <circle cx="38" cy="48" r="1.5" fill="#FFFFFF" />
          
          <circle cx="60" cy="50" r="4.5" fill="#4E3629" />
          <circle cx="58" cy="48" r="1.5" fill="#FFFFFF" />

          {/* Sonrojo */}
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

const estilos = {
  tourCuerpo: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  tourHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(133, 178, 50, 0.2)',
    paddingBottom: '6px',
  },
  tourTitulo: {
    fontSize: '0.95rem',
    color: 'var(--chocolate-oscuro)',
    fontWeight: '800',
  },
  tourPasoBadge: {
    background: 'var(--verde-arveja)',
    color: 'var(--blanco-puro)',
    fontSize: '0.7rem',
    fontWeight: '700',
    padding: '2px 8px',
    borderRadius: 'var(--radio-circular)',
  },
  tourTexto: {
    fontSize: '0.85rem',
    color: 'var(--chocolate-oscuro)',
    lineHeight: '1.4',
  },
  tourAcciones: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '8px',
    marginTop: '6px',
  },
  tourBotonSiguiente: {
    background: 'var(--verde-arveja)',
    color: 'var(--blanco-puro)',
    fontSize: '0.8rem',
    fontWeight: '700',
    padding: '6px 12px',
    borderRadius: '6px',
    boxShadow: '0 2px 6px rgba(133,178,50,0.2)',
  },
  tourBotonSecundario: {
    background: 'var(--blanco-puro)',
    color: 'var(--chocolate-oscuro)',
    border: '1px solid var(--chocolate-claro)',
    fontSize: '0.8rem',
    fontWeight: '700',
    padding: '6px 12px',
    borderRadius: '6px',
  },
  tourBotonSalir: {
    background: 'transparent',
    color: 'var(--chocolate-medio)',
    fontSize: '0.8rem',
    fontWeight: '600',
    padding: '6px 8px',
  },
};

export default AsistenteMascota;
