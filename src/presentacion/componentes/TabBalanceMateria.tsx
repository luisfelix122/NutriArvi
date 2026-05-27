import React from 'react';
import { Lote } from '../../dominio/entidades/Lote';
import { Galleta } from '../../dominio/entidades/Galleta';

interface TabBalanceMateriaProps {
  balanceLote: Lote;
  galletaEstandar: Galleta;
}

export const TabBalanceMateria: React.FC<TabBalanceMateriaProps> = ({ balanceLote, galletaEstandar }) => {
  return (
    <div className="animar-aparicion" style={estilos.contenedor} id="seccion-balance-materia">
      <div style={estilos.grid}>
        
        {/* Tarjeta del Balance Físico del Lote */}
        <div className="tarjeta-premium" style={estilos.tarjeta}>
          <div style={estilos.cabeceraTarjeta}>
            <span style={estilos.icono}>⚖️</span>
            <h3 style={estilos.tituloTarjeta}>Balance de Materia del Lote</h3>
          </div>
          <p style={estilos.subtitulo}>Flujo físico de la masa desde la mezcla hasta el horneado final.</p>
          
          <div style={estilos.flujoContenedor}>
            
            <div style={estilos.flujoFila}>
              <div style={estilos.flujoEtiqueta}>
                <strong>Masa Bruta del Lote</strong>
                <span>(Sólidos + Líquidos mezclados)</span>
              </div>
              <div style={estilos.flujoValorPositive}>{balanceLote.masaBrutaGramos.toFixed(2)} g</div>
            </div>

            <div style={estilos.flechaFlujo}>↓</div>

            <div style={estilos.flujoFilaMerma}>
              <div style={estilos.flujoEtiqueta}>
                <strong>Merma por Horneado ({balanceLote.mermaPorcentaje}%)</strong>
                <span>(Deshidratación y evaporación de agua)</span>
              </div>
              <div style={estilos.flujoValorNegative}>{balanceLote.mermaGramos.toFixed(2)} g</div>
            </div>

            <div style={estilos.flechaFlujo}>↓</div>

            <div style={estilos.flujoFilaTotal}>
              <div style={estilos.flujoEtiqueta}>
                <strong>Masa Neta Horneada Total</strong>
                <span>(Masa real disponible para empaque)</span>
              </div>
              <div style={estilos.flujoValorTotal}>{balanceLote.masaNetaGramos.toFixed(2)} g</div>
            </div>

          </div>

          <div style={estilos.notaSalud}>
            <span style={estilos.notaIcono}>💡</span>
            <p style={estilos.notaTexto}>
              Una merma por deshidratación controlada del <strong>12%</strong> asegura la crocantez característica de las galletas sin perder propiedades nutricionales.
            </p>
          </div>
        </div>

        {/* Tarjeta de la Mini Galleta y Rendimiento Comercial */}
        <div className="tarjeta-premium" style={estilos.tarjeta}>
          <div style={estilos.cabeceraTarjeta}>
            <span style={estilos.icono}>🍪</span>
            <h3 style={estilos.tituloTarjeta}>Morfología y Rendimiento Comercial</h3>
          </div>
          <p style={estilos.subtitulo}>Dimensiones unitarias de la galleta y capacidad de empaque del lote.</p>
          
          <div style={estilos.morfologiaGrid}>
            <div style={estilos.morfologiaItem}>
              <span style={estilos.morfologiaLabel}>Diámetro Unitario</span>
              <strong style={estilos.morfologiaValor}>{galletaEstandar.diametroCm.toFixed(2)} cm</strong>
            </div>
            <div style={estilos.morfologiaItem}>
              <span style={estilos.morfologiaLabel}>Grosor / Espesor</span>
              <strong style={estilos.morfologiaValor}>{galletaEstandar.espesorCm.toFixed(2)} cm</strong>
            </div>
            <div style={estilos.morfologiaItem}>
              <span style={estilos.morfologiaLabel}>Volumen Geométrico</span>
              <strong style={estilos.morfologiaValor}>{galletaEstandar.volumenGeometricoCm3.toFixed(2)} cm³</strong>
            </div>
            <div style={estilos.morfologiaItem}>
              <span style={estilos.morfologiaLabel}>Peso Neto Unitario</span>
              <strong style={estilos.morfologiaValor}>{galletaEstandar.pesoNetoGramo.toFixed(2)} g</strong>
            </div>
          </div>

          {/* Gráfico representativo de la galleta */}
          <div style={estilos.graficoGalletaContenedor}>
            <svg width="100%" height="90" viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="45" r="35" fill="#D2B48C" stroke="#4E3629" strokeWidth="2.5" />
              <circle cx="100" cy="45" r="31" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
              {/* Chispas */}
              <circle cx="85" cy="35" r="2.5" fill="#4E3629" />
              <circle cx="115" cy="40" r="2.5" fill="#4E3629" />
              <circle cx="95" cy="55" r="2.5" fill="#4E3629" />
              <circle cx="102" cy="30" r="2.5" fill="#4E3629" />
              <circle cx="112" cy="52" r="2.5" fill="#4E3629" />
              {/* Cotas */}
              <line x1="55" y1="45" x2="145" y2="45" stroke="#85B232" strokeWidth="1.5" strokeDasharray="3 3" />
              <polygon points="55,45 61,42 61,48" fill="#85B232" />
              <polygon points="145,45 139,42 139,48" fill="#85B232" />
              <rect x="75" y="10" width="50" height="18" rx="4" fill="var(--verde-arveja)" />
              <text x="100" y="22" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">Ø 4.00 cm</text>
            </svg>
          </div>

          <div style={estilos.divisor}></div>

          <div style={estilos.rendimientoComercial}>
            <div style={estilos.rendimientoBloque}>
              <strong style={estilos.rendimientoNumero}>{balanceLote.rendimientoUnidades}</strong>
              <span>Mini Galletas por Lote</span>
            </div>
            <div style={estilos.rendimientoBloque}>
              <strong style={estilos.rendimientoNumero}>{balanceLote.unidadesPorBolsa}</strong>
              <span>Galletas por Bolsa</span>
            </div>
            <div style={estilos.rendimientoBloqueDestacado}>
              <strong style={estilos.rendimientoNumeroDestacado}>{balanceLote.rendimientoBolsas}</strong>
              <span>Bolsas Exactas (Sin saldos)</span>
            </div>
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
    minHeight: '420px',
  },
  cabeceraTarjeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
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
  },
  flujoContenedor: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
    flexGrow: 1,
  },
  flujoFila: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'var(--chocolate-muy-claro)',
    padding: '16px 20px',
    borderRadius: 'var(--radio-pequeno)',
    border: '1px solid var(--chocolate-claro)',
  },
  flujoFilaMerma: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#FFF0F0',
    padding: '16px 20px',
    borderRadius: 'var(--radio-pequeno)',
    border: '1px solid #FFD3D3',
  },
  flujoFilaTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'var(--verde-arveja-claro)',
    padding: '18px 20px',
    borderRadius: 'var(--radio-pequeno)',
    border: '1px solid rgba(133, 178, 50, 0.3)',
  },
  flujoEtiqueta: {
    display: 'flex',
    flexDirection: 'column' as const,
    textAlign: 'left' as const,
    '& strong': {
      fontSize: '0.95rem',
    },
    '& span': {
      fontSize: '0.75rem',
      color: 'var(--chocolate-medio)',
    },
  },
  flujoValorPositive: {
    fontSize: '1.2rem',
    fontWeight: '800',
    color: 'var(--chocolate-oscuro)',
  },
  flujoValorNegative: {
    fontSize: '1.2rem',
    fontWeight: '800',
    color: '#D93838',
  },
  flujoValorTotal: {
    fontSize: '1.3rem',
    fontWeight: '900',
    color: 'var(--verde-arveja)',
  },
  flechaFlujo: {
    textAlign: 'center' as const,
    fontSize: '1.1rem',
    color: 'var(--chocolate-medio)',
    fontWeight: '700',
    margin: '4px 0',
  },
  notaSalud: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    background: 'var(--verde-arveja-claro)',
    padding: '14px 18px',
    borderRadius: 'var(--radio-pequeno)',
    marginTop: '20px',
    border: '1px solid rgba(133, 178, 50, 0.15)',
  },
  notaIcono: {
    fontSize: '1.3rem',
  },
  notaTexto: {
    fontSize: '0.85rem',
    color: 'var(--chocolate-oscuro)',
    textAlign: 'left' as const,
  },
  morfologiaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    marginBottom: '20px',
  },
  morfologiaItem: {
    background: 'var(--chocolate-muy-claro)',
    padding: '12px 16px',
    borderRadius: 'var(--radio-pequeno)',
    border: '1px solid var(--chocolate-claro)',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  morfologiaLabel: {
    fontSize: '0.75rem',
    color: 'var(--chocolate-medio)',
    fontWeight: '600',
    marginBottom: '4px',
  },
  morfologiaValor: {
    fontSize: '1.15rem',
    color: 'var(--chocolate-oscuro)',
    fontWeight: '800',
  },
  graficoGalletaContenedor: {
    background: 'var(--blanco-puro)',
    borderRadius: 'var(--radio-pequeno)',
    border: '1px solid var(--chocolate-claro)',
    padding: '10px 0',
    marginBottom: '24px',
  },
  divisor: {
    height: '1px',
    background: 'var(--chocolate-claro)',
    margin: '10px 0 20px 0',
  },
  rendimientoComercial: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
  },
  rendimientoBloque: {
    background: 'var(--chocolate-muy-claro)',
    padding: '12px 6px',
    borderRadius: 'var(--radio-pequeno)',
    border: '1px solid var(--chocolate-claro)',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    '& span': {
      fontSize: '0.7rem',
      color: 'var(--chocolate-medio)',
      fontWeight: '600',
      textAlign: 'center' as const,
      marginTop: '4px',
    },
  },
  rendimientoBloqueDestacado: {
    background: 'var(--rosa-claro)',
    padding: '12px 6px',
    borderRadius: 'var(--radio-pequeno)',
    border: '1px solid var(--rosa-primario)',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    boxShadow: 'var(--sombra-sutil)',
    '& span': {
      fontSize: '0.7rem',
      color: 'var(--rosa-brillante)',
      fontWeight: '700',
      textAlign: 'center' as const,
      marginTop: '4px',
    },
  },
  rendimientoNumero: {
    fontSize: '1.4rem',
    fontWeight: '800',
    color: 'var(--chocolate-oscuro)',
  },
  rendimientoNumeroDestacado: {
    fontSize: '1.5rem',
    fontWeight: '900',
    color: 'var(--rosa-brillante)',
  },
};

export default TabBalanceMateria;
