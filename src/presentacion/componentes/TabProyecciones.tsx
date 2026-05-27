import React from 'react';
import { Proyeccion } from '../../dominio/entidades/Proyeccion';

interface TabProyeccionesProps {
  escenariosFinancierosFijos: Proyeccion[];
  volumenSimulado: number;
  setVolumenSimulado: (volumen: number) => void;
  proyeccionSimulada: Proyeccion;
  obtenerEnlaceWhatsAppPedidoEspecifico: (bolsas: number) => string;
  tourActivo?: boolean;
  pasoTour?: number;
}

export const TabProyecciones: React.FC<TabProyeccionesProps> = ({
  escenariosFinancierosFijos,
  volumenSimulado,
  setVolumenSimulado,
  proyeccionSimulada,
  obtenerEnlaceWhatsAppPedidoEspecifico,
  tourActivo,
  pasoTour,
}) => {
  const esUtilidadPositiva = proyeccionSimulada.utilidadNeta > 0;
  const esEquilibrioExacto = proyeccionSimulada.utilidadNeta === 0;

  return (
    <div className="animar-aparicion" style={estilos.contenedor} id="seccion-proyecciones">
      <div style={estilos.grid}>
        
        {/* Lado Izquierdo: Escenarios Fijos */}
        <div style={estilos.columnaEscenarios}>
          <div className="tarjeta-premium" style={estilos.tarjetaFija}>
            <div style={estilos.cabeceraTarjeta}>
              <span style={estilos.icono}>📋</span>
              <h3 style={estilos.tituloTarjeta}>Escenarios de Venta Mensuales</h3>
            </div>
            <p style={estilos.subtitulo}>Métricas financieras del proyecto en tres niveles de producción sustentados.</p>

            <div style={estilos.escenariosLista}>
              {escenariosFinancierosFijos.map((escenario, index) => {
                const esEquilibrio = escenario.volumenBolsas === 236;
                const esOptimista = escenario.volumenBolsas === 650;
                const esPasoEquilibrio = tourActivo && pasoTour === 7 && esEquilibrio;
                
                return (
                  <div
                    key={index}
                    style={{
                      ...estilos.escenarioItem,
                      ...(esEquilibrio ? estilos.escenarioItemEquilibrio : {}),
                      ...(esOptimista ? estilos.escenarioItemOptimista : {})
                    }}
                    className={esPasoEquilibrio ? 'tour-resaltado' : ''}
                    id={esEquilibrio ? 'cuadro-escenario-equilibrio' : `cuadro-escenario-${index}`}
                  >
                    <div style={estilos.escenarioEncabezado}>
                      <span style={{
                        ...estilos.escenarioBadge,
                        ...(esEquilibrio ? estilos.badgeEquilibrio : {}),
                        ...(esOptimista ? estilos.badgeOptimista : {})
                      }}>{escenario.nombreEscenario}</span>
                      <strong style={estilos.escenarioBolsas}>{escenario.volumenBolsas} bolsas</strong>
                    </div>

                    <div style={estilos.escenarioCuerpo}>
                      <div style={estilos.escenarioDetalle}>
                        <span>Ventas (Ingresos):</span>
                        <strong>S/ {escenario.ingresosBrutos.toFixed(2)}</strong>
                      </div>
                      <div style={estilos.escenarioDetalle}>
                        <span>(-) Costo de Producción:</span>
                        <strong>S/ {escenario.costoDirecto.toFixed(2)}</strong>
                      </div>
                      <div style={estilos.escenarioDetalle}>
                        <span>(-) Gastos Fijos (CIF):</span>
                        <strong>S/ {escenario.costosIndirectos.toFixed(2)}</strong>
                      </div>
                      <div style={estilos.divisorEscenario}></div>
                      <div style={estilos.escenarioDetalleTotal}>
                        <span>UTILIDAD NETA OPERATIVA:</span>
                        <strong style={{
                          color: esEquilibrio ? 'var(--chocolate-oscuro)' : 'var(--verde-arveja)',
                          fontWeight: '900'
                        }}>
                          S/ {escenario.utilidadNeta.toFixed(2)}
                        </strong>
                      </div>
                      <div style={estilos.escenarioDetalle}>
                        <span>Margen de Ganancia:</span>
                        <strong style={{ color: esEquilibrio ? 'var(--chocolate-oscuro)' : 'var(--verde-arveja)' }}>
                          {escenario.margenUtilidadPorcentaje.toFixed(1)}%
                        </strong>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Lado Derecho: Calculadora Interactiva Deslizante */}
        <div style={estilos.columnaCalculadora}>
          <div
            className={`tarjeta-premium ${tourActivo && pasoTour === 8 ? 'tour-resaltado' : ''}`}
            style={estilos.tarjetaCalculadora}
            id="tarjeta-calculadora-simulador"
          >
            <div style={estilos.cabeceraTarjeta}>
              <span style={estilos.icono}>🧮</span>
              <h3 style={estilos.tituloTarjeta}>Simulador Dinámico de Venta</h3>
            </div>
            <p style={estilos.subtitulo}>Mueve el deslizador para proyectar tus ingresos y ganancias netas operativas en base al volumen mensual deseado.</p>

            <div style={estilos.controlCalculadora}>
              <div style={estilos.valorSimuladoContenedor}>
                <span style={estilos.simuladoLabel}>Volumen de venta proyectado:</span>
                <strong style={estilos.simuladoBolsas}>{volumenSimulado} Bolsas / mes</strong>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={volumenSimulado}
                onChange={(e) => setVolumenSimulado(Number(e.target.value))}
                style={estilos.slider}
                id="deslizador-volumen"
              />
              <div style={estilos.rangoEtiquetas}>
                <span>0 bolsas</span>
                <span>Punto de Equilibrio (236)</span>
                <span>1000 bolsas</span>
              </div>
            </div>

            {/* Panel de Resultados del Simulador */}
            <div style={{
              ...estilos.resultadosPanel,
              ...(esUtilidadPositiva ? estilos.resultadosPanelRentable : {}),
              ...(!esUtilidadPositiva && !esEquilibrioExacto ? estilos.resultadosPanelPerdida : {})
            }} className={esUtilidadPositiva ? 'brillar-activo' : ''}>
              
              <div style={estilos.resultadoEstadoBadge}>
                {esUtilidadPositiva ? (
                  <span style={estilos.badgeRentabilidadPositiva}>💚 ¡Zona de Ganancia Rentable!</span>
                ) : esEquilibrioExacto ? (
                  <span style={estilos.badgeRentabilidadEquilibrio}>⚖️ Punto de Equilibrio Exacto</span>
                ) : (
                  <span style={estilos.badgeRentabilidadPerdida}>⚠️ Zona de Déficit (Aumentar ventas)</span>
                )}
              </div>

              <div style={estilos.resultadosGrid}>
                
                <div style={estilos.resultadoCaja}>
                  <span>Ingresos Estimados (PVP):</span>
                  <strong style={estilos.resultadoCajaValor}>S/ {proyeccionSimulada.ingresosBrutos.toFixed(2)}</strong>
                </div>

                <div style={estilos.resultadoCaja}>
                  <span>Costo Directo Variable:</span>
                  <strong style={estilos.resultadoCajaValor}>S/ {proyeccionSimulada.costoDirecto.toFixed(2)}</strong>
                </div>

                <div style={estilos.resultadoCaja}>
                  <span>Costos Indirectos Fijos:</span>
                  <strong style={estilos.resultadoCajaValor}>S/ {proyeccionSimulada.costosIndirectos.toFixed(2)}</strong>
                </div>

                <div style={estilos.resultadoCajaDestacada}>
                  <span>UTILIDAD NETA OPERATIVA:</span>
                  <strong style={{
                    fontSize: '1.5rem',
                    fontWeight: '900',
                    color: proyeccionSimulada.utilidadNeta > 0 
                      ? 'var(--verde-arveja)' 
                      : proyeccionSimulada.utilidadNeta < 0 
                      ? '#D93838' 
                      : 'var(--chocolate-oscuro)'
                  }}>
                    S/ {proyeccionSimulada.utilidadNeta.toFixed(2)}
                  </strong>
                </div>

              </div>

              <div style={estilos.margenResultado}>
                <span>Margen de Utilidad Neto sobre Ventas:</span>
                <strong style={{
                  color: proyeccionSimulada.utilidadNeta > 0 ? 'var(--verde-arveja)' : proyeccionSimulada.utilidadNeta < 0 ? '#D93838' : 'var(--chocolate-oscuro)'
                }}>{proyeccionSimulada.margenUtilidadPorcentaje.toFixed(1)}%</strong>
              </div>

            </div>

            {/* Acción de pedido basada en la calculadora */}
            {volumenSimulado > 0 && (
              <div style={estilos.pedidoCajaAccion}>
                <p style={estilos.pedidoCajaTexto}>
                  ¿Quieres abastecer esta proyección con masa real de NutriArvi? Pide ahora tus lotes equivalentes directos por WhatsApp:
                </p>
                <a
                  href={obtenerEnlaceWhatsAppPedidoEspecifico(volumenSimulado)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boton-interactivo"
                  style={estilos.pedidoBoton}
                  id="boton-pedido-simulador"
                >
                  💬 Pedir {volumenSimulado} bolsas por WhatsApp
                </a>
              </div>
            )}

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
  columnaEscenarios: {},
  columnaCalculadora: {},
  tarjetaFija: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  tarjetaCalculadora: {
    display: 'flex',
    flexDirection: 'column' as const,
    transition: 'var(--transicion-suave)',
  },
  cabeceraTarjeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
    textAlign: 'left' as const,
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
    textAlign: 'left' as const,
  },
  escenariosLista: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
    flexGrow: 1,
  },
  escenarioItem: {
    background: 'var(--chocolate-muy-claro)',
    border: '1px solid var(--chocolate-claro)',
    borderRadius: 'var(--radio-medio)',
    padding: '20px',
    textAlign: 'left' as const,
    transition: 'var(--transicion-suave)',
  },
  escenarioItemEquilibrio: {
    borderColor: 'var(--chocolate-medio)',
    borderStyle: 'dashed' as const,
  },
  escenarioItemOptimista: {
    borderColor: 'var(--verde-arveja)',
    background: 'var(--verde-arveja-claro)',
  },
  escenarioEncabezado: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  escenarioBadge: {
    background: 'var(--chocolate-claro)',
    color: 'var(--chocolate-oscuro)',
    fontWeight: '700',
    fontSize: '0.75rem',
    padding: '4px 10px',
    borderRadius: 'var(--radio-circular)',
  },
  badgeEquilibrio: {
    background: 'var(--chocolate-oscuro)',
    color: 'var(--blanco-puro)',
  },
  badgeOptimista: {
    background: 'var(--verde-arveja)',
    color: 'var(--blanco-puro)',
  },
  escenarioBolsas: {
    fontSize: '1.05rem',
    color: 'var(--chocolate-oscuro)',
  },
  escenarioCuerpo: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '6px',
  },
  escenarioDetalle: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.85rem',
    color: 'var(--chocolate-medio)',
    fontWeight: '500',
  },
  divisorEscenario: {
    height: '1px',
    background: 'var(--chocolate-claro)',
    margin: '6px 0',
  },
  escenarioDetalleTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.9rem',
    color: 'var(--chocolate-oscuro)',
    fontWeight: '700',
  },
  controlCalculadora: {
    background: 'var(--chocolate-muy-claro)',
    border: '1px solid var(--chocolate-claro)',
    padding: '24px',
    borderRadius: 'var(--radio-medio)',
    marginBottom: '24px',
  },
  valorSimuladoContenedor: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    textAlign: 'left' as const,
  },
  simuladoLabel: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--chocolate-medio)',
  },
  simuladoBolsas: {
    fontSize: '1.4rem',
    fontWeight: '900',
    color: 'var(--rosa-brillante)',
  },
  slider: {
    width: '100%',
    height: '8px',
    background: 'var(--chocolate-claro)',
    outline: 'none',
    borderRadius: 'var(--radio-circular)',
    WebkitAppearance: 'none' as const,
    cursor: 'pointer',
  },
  rangoEtiquetas: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    color: 'var(--chocolate-medio)',
    fontWeight: '600',
    marginTop: '10px',
  },
  resultadosPanel: {
    background: 'var(--blanco-puro)',
    border: '1px solid var(--chocolate-claro)',
    borderRadius: 'var(--radio-medio)',
    padding: '24px',
    textAlign: 'center' as const,
    transition: 'var(--transicion-suave)',
  },
  resultadosPanelRentable: {
    background: 'var(--verde-arveja-claro)',
    borderColor: 'rgba(133, 178, 50, 0.25)',
  },
  resultadosPanelPerdida: {
    background: '#FFF2F2',
    borderColor: '#FFD1D1',
  },
  resultadoEstadoBadge: {
    marginBottom: '16px',
  },
  badgeRentabilidadPositiva: {
    background: 'var(--verde-arveja)',
    color: 'var(--blanco-puro)',
    fontWeight: '800',
    fontSize: '0.85rem',
    padding: '6px 14px',
    borderRadius: 'var(--radio-circular)',
    boxShadow: '0 2px 10px rgba(133, 178, 50, 0.2)',
  },
  badgeRentabilidadEquilibrio: {
    background: 'var(--chocolate-oscuro)',
    color: 'var(--blanco-puro)',
    fontWeight: '800',
    fontSize: '0.85rem',
    padding: '6px 14px',
    borderRadius: 'var(--radio-circular)',
  },
  badgeRentabilidadPerdida: {
    background: '#D93838',
    color: 'var(--blanco-puro)',
    fontWeight: '800',
    fontSize: '0.85rem',
    padding: '6px 14px',
    borderRadius: 'var(--radio-circular)',
  },
  resultadosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '12px',
    marginBottom: '20px',
  },
  resultadoCaja: {
    background: 'var(--vidrio-fondo)',
    border: '1px solid rgba(78, 54, 41, 0.08)',
    borderRadius: 'var(--radio-pequeno)',
    padding: '12px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    '& span': {
      fontSize: '0.75rem',
      color: 'var(--chocolate-medio)',
      fontWeight: '600',
    },
  },
  resultadoCajaDestacada: {
    gridColumn: '1 / -1',
    background: 'var(--vidrio-fondo)',
    border: '1px solid rgba(78, 54, 41, 0.15)',
    borderRadius: 'var(--radio-pequeno)',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    '& span': {
      fontSize: '0.8rem',
      color: 'var(--chocolate-medio)',
      fontWeight: '700',
      marginBottom: '4px',
    },
  },
  resultadoCajaValor: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: 'var(--chocolate-oscuro)',
    marginTop: '4px',
  },
  margenResultado: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--chocolate-oscuro)',
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
  },
  pedidoCajaAccion: {
    marginTop: '24px',
    borderTop: '1px dashed var(--chocolate-claro)',
    paddingTop: '20px',
    textAlign: 'left' as const,
  },
  pedidoCajaTexto: {
    fontSize: '0.85rem',
    color: 'var(--chocolate-medio)',
    marginBottom: '14px',
    fontWeight: '500',
  },
  pedidoBoton: {
    display: 'block',
    width: '100%',
    background: 'var(--verde-arveja)',
    color: 'var(--blanco-puro)',
    textAlign: 'center' as const,
    fontWeight: '800',
    fontSize: '1rem',
    padding: '14px 20px',
    borderRadius: 'var(--radio-medio)',
    boxShadow: '0 4px 15px rgba(133, 178, 50, 0.25)',
    transition: 'var(--transicion-rapida)',
  },
};

export default TabProyecciones;
