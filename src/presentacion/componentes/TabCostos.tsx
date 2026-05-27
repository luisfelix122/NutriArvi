import React from 'react';

interface TabCostosProps {
  desgloseCostosUnitarios: { nombre: string; valor: number; porcentaje: number }[];
}

export const TabCostos: React.FC<TabCostosProps> = ({ desgloseCostosUnitarios }) => {
  const precioSugerido = 2.00;
  const costoTotalProduccion = 1.57;
  const margenGananciaUnitario = 0.43;

  // Colores para cada sección
  const colores = [
    'var(--verde-arveja)',     /* Insumos */
    '#FFA800',                  /* Empaque y Sticker */
    'var(--rosa-primario)',     /* CIF */
    '#00C2FF'                   /* Ganancia */
  ];

  return (
    <div className="animar-aparicion" style={estilos.contenedor} id="seccion-analisis-costos">
      <div style={estilos.grid}>
        
        {/* Desglose de Estructura de Costos */}
        <div className="tarjeta-premium" style={estilos.tarjeta}>
          <div style={estilos.cabeceraTarjeta}>
            <span style={estilos.icono}>📊</span>
            <h3 style={estilos.tituloTarjeta}>Estructura de Costo Unitario</h3>
          </div>
          <p style={estilos.subtitulo}>Desglose exacto de los costos e ingresos asociados a una sola bolsa de galletas (PVP S/ 2.00).</p>
          
          <div style={estilos.listaCostos}>
            {desgloseCostosUnitarios.map((item, index) => {
              const esMargen = item.nombre.includes("Margen");
              return (
                <div
                  key={index}
                  style={{
                    ...estilos.itemCosto,
                    borderLeftColor: colores[index],
                    ...(esMargen ? estilos.itemGanancia : {})
                  }}
                >
                  <div style={estilos.costoInfo}>
                    <strong style={estilos.costoNombre}>{item.nombre}</strong>
                    <span style={estilos.costoPorcentaje}>{item.porcentaje}% del precio final</span>
                  </div>
                  <div style={estilos.costoValores}>
                    <strong style={{
                      ...estilos.costoValor,
                      color: esMargen ? 'var(--verde-arveja)' : 'var(--chocolate-oscuro)'
                    }}>S/ {item.valor.toFixed(2)}</strong>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={estilos.bloqueTotales}>
            <div style={estilos.totalFila}>
              <span>COSTO TOTAL PRODUCCIÓN:</span>
              <strong style={estilos.totalValor}>S/ {costoTotalProduccion.toFixed(2)} (78.7%)</strong>
            </div>
            <div style={estilos.totalFilaDestacada}>
              <span>PRECIO DE VENTA AL PÚBLICO (PVP):</span>
              <strong style={estilos.totalValorDestacado}>S/ {precioSugerido.toFixed(2)} (100.0%)</strong>
            </div>
          </div>
        </div>

        {/* Visualización Gráfica (Dona SVG Interactiva de Alta Fidelidad) */}
        <div className="tarjeta-premium" style={estilos.tarjetaGrafico}>
          <div style={estilos.cabeceraTarjeta}>
            <span style={estilos.icono}>🎨</span>
            <h3 style={estilos.tituloTarjeta}>Distribución Porcentual del PVP</h3>
          </div>
          <p style={estilos.subtitulo}>Representación del valor de venta unitario de S/ 2.00.</p>
          
          <div style={estilos.graficoContenedor}>
            {/* Dona SVG */}
            <svg width="220" height="220" viewBox="0 0 42 42" className="dona-svg" style={estilos.svgDona}>
              <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="var(--chocolate-claro)" strokeWidth="4"></circle>
              
              {/* Insumos: 40.4% -> stroke-dasharray="40.4 59.6" stroke-dashoffset="100" (start at top: 25) */}
              <circle cx="21" cy="21" r="15.915" fill="transparent" stroke={colores[0]} strokeWidth="4.2"
                strokeDasharray="40.4 59.6" strokeDashoffset="25"></circle>

              {/* Empaque: 15% -> stroke-dasharray="15 85" stroke-dashoffset="100 - 40.4 = 59.6" -> starting from 25 - 40.4 = -15.4 */}
              <circle cx="21" cy="21" r="15.915" fill="transparent" stroke={colores[1]} strokeWidth="4.2"
                strokeDasharray="15 85" strokeDashoffset="-15.4"></circle>

              {/* CIF: 23.3% -> starting from -15.4 - 15 = -30.4 */}
              <circle cx="21" cy="21" r="15.915" fill="transparent" stroke={colores[2]} strokeWidth="4.2"
                strokeDasharray="23.3 76.7" strokeDashoffset="-30.4"></circle>

              {/* Ganancia: 21.3% -> starting from -30.4 - 23.3 = -53.7 */}
              <circle cx="21" cy="21" r="15.915" fill="transparent" stroke={colores[3]} strokeWidth="4.2"
                strokeDasharray="21.3 78.7" strokeDashoffset="-53.7"></circle>

              <g style={estilos.textoDona}>
                <text x="50%" y="47%" textAnchor="middle" fontWeight="bold" fontSize="4.5" fill="var(--chocolate-oscuro)">PVP</text>
                <text x="50%" y="61%" textAnchor="middle" fontWeight="900" fontSize="5" fill="var(--rosa-brillante)">S/ 2.00</text>
              </g>
            </svg>
          </div>

          <div style={estilos.leyendaGrid}>
            <div style={estilos.leyendaItem}>
              <span style={{ ...estilos.leyendaColor, background: colores[0] }}></span>
              <span style={estilos.leyendaTexto}>Harina y Receta (40.4%)</span>
            </div>
            <div style={estilos.leyendaItem}>
              <span style={{ ...estilos.leyendaColor, background: colores[1] }}></span>
              <span style={estilos.leyendaTexto}>Bolsa y Sticker (15.0%)</span>
            </div>
            <div style={estilos.leyendaItem}>
              <span style={{ ...estilos.leyendaColor, background: colores[2] }}></span>
              <span style={estilos.leyendaTexto}>Gastos CIF (23.3%)</span>
            </div>
            <div style={estilos.leyendaItem}>
              <span style={{ ...estilos.leyendaColor, background: colores[3] }}></span>
              <span style={estilos.leyendaTexto}>Utilidad Neta (21.3%)</span>
            </div>
          </div>
          
          <div style={estilos.resumenFinancieroCaja}>
            <p>
              💰 <strong>Margen de Rentabilidad Saludable:</strong> Un margen neto del <strong>{margenGananciaUnitario * 100 / precioSugerido}%</strong> es excelente para productos artesanales nutritivos, permitiendo reinversión constante y amortización veloz de equipos.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

const estilos = {
  contenedor: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px 40px 20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '30px',
  },
  tarjeta: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  tarjetaGrafico: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center' as const,
  },
  cabeceraTarjeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
    width: '100%',
    justifyContent: 'flex-start',
  },
  icono: {
    fontSize: '1.8rem',
  },
  tituloTarjeta: {
    fontSize: '1.4rem',
    color: 'var(--chocolate-oscuro)',
    fontWeight: '800',
  },
  subtitulo: {
    fontSize: '0.9rem',
    color: 'var(--chocolate-medio)',
    marginBottom: '24px',
    width: '100%',
    textAlign: 'left' as const,
  },
  listaCostos: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
    flexGrow: 1,
  },
  itemCosto: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'var(--chocolate-muy-claro)',
    padding: '12px 18px',
    borderRadius: 'var(--radio-pequeno)',
    borderLeft: '5px solid transparent',
    borderTop: '1px solid var(--chocolate-claro)',
    borderRight: '1px solid var(--chocolate-claro)',
    borderBottom: '1px solid var(--chocolate-claro)',
    textAlign: 'left' as const,
  },
  itemGanancia: {
    background: 'var(--verde-arveja-claro)',
    borderColor: 'rgba(133, 178, 50, 0.2)',
  },
  costoInfo: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  costoNombre: {
    fontSize: '0.9rem',
    color: 'var(--chocolate-oscuro)',
  },
  costoPorcentaje: {
    fontSize: '0.75rem',
    color: 'var(--chocolate-medio)',
    fontWeight: '500',
  },
  costoValores: {
    display: 'flex',
    alignItems: 'center',
  },
  costoValor: {
    fontSize: '1.15rem',
    fontWeight: '800',
  },
  bloqueTotales: {
    marginTop: '24px',
    borderTop: '2px dashed var(--chocolate-claro)',
    paddingTop: '16px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },
  totalFila: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--chocolate-medio)',
  },
  totalValor: {
    color: 'var(--chocolate-oscuro)',
  },
  totalFilaDestacada: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'var(--rosa-claro)',
    padding: '12px 16px',
    borderRadius: 'var(--radio-pequeno)',
    border: '1px solid var(--rosa-primario)',
    fontSize: '0.9rem',
    fontWeight: '800',
    color: 'var(--rosa-brillante)',
  },
  totalValorDestacado: {
    fontSize: '1.2rem',
    fontWeight: '900',
  },
  graficoContenedor: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 0 20px 0',
    position: 'relative' as const,
  },
  svgDona: {
    transform: 'rotate(-90deg)',
    borderRadius: '50%',
  },
  textoDona: {
    transform: 'rotate(90deg) translate(0px, -42px)',
  },
  leyendaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px 20px',
    width: '100%',
    marginBottom: '24px',
  },
  leyendaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textAlign: 'left' as const,
  },
  leyendaColor: {
    width: '12px',
    height: '12px',
    borderRadius: '3px',
    display: 'inline-block',
  },
  leyendaTexto: {
    fontSize: '0.8rem',
    color: 'var(--chocolate-oscuro)',
    fontWeight: '600',
  },
  resumenFinancieroCaja: {
    background: 'var(--verde-arveja-claro)',
    padding: '16px 20px',
    borderRadius: 'var(--radio-medio)',
    border: '1px solid rgba(133, 178, 50, 0.15)',
    textAlign: 'left' as const,
    '& p': {
      fontSize: '0.85rem',
      color: 'var(--chocolate-oscuro)',
    },
  },
};

export default TabCostos;
