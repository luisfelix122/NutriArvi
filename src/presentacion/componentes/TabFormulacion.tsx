import React from 'react';
import { Ingrediente } from '../../dominio/entidades/Ingrediente';

interface TabFormulacionProps {
  listaIngredientes: Ingrediente[];
  costoTotalIngredientes: number;
  pesoTotalIngredientes: number;
  tourActivo?: boolean;
  pasoTour?: number;
}

export const TabFormulacion: React.FC<TabFormulacionProps> = ({
  listaIngredientes,
  costoTotalIngredientes,
  pesoTotalIngredientes,
  tourActivo,
  pasoTour,
}) => {
  return (
    <div className="animar-aparicion" style={estilos.contenedor} id="seccion-formulacion">
      <div className="tarjeta-premium" style={estilos.tarjetaPrincipal}>
        
        <div style={estilos.cabeceraSeccion}>
          <div>
            <span style={estilos.badge}>Ingredientes del Lote</span>
            <h3 style={estilos.tituloSeccion}>Fórmula Nutricional de NutriArvi</h3>
            <p style={estilos.subtitulo}>Desglose exacto de ingredientes, pesos en masa y costos prorrateados por lote de producción.</p>
          </div>
          <div style={estilos.resumenFormulacion}>
            <div style={estilos.bloqueResumen}>
              <span style={estilos.resumenLabel}>PESO TOTAL MEZCLA</span>
              <strong style={estilos.resumenValorGreen}>{pesoTotalIngredientes} gramos</strong>
            </div>
            <div
              style={estilos.bloqueResumen}
              className={tourActivo && pasoTour === 4 ? 'tour-resaltado' : ''}
              id="cuadro-costo-ingredientes"
            >
              <span style={estilos.resumenLabel}>COSTO INGREDIENTES</span>
              <strong style={estilos.resumenValorPink}>S/ {costoTotalIngredientes.toFixed(2)}</strong>
            </div>
          </div>
        </div>

        <div style={estilos.tablaContenedor}>
          <table style={estilos.tabla}>
            <thead>
              <tr style={estilos.tablaCabecera}>
                <th style={estilos.th}>Insumo / Ingrediente</th>
                <th style={estilos.thCentro}>Cantidad (g)</th>
                <th style={estilos.thDerecha}>Porcentaje Peso</th>
                <th style={estilos.thCentro}>Precio de Compra Base</th>
                <th style={estilos.thDerecha}>Costo Prorrateado</th>
              </tr>
            </thead>
            <tbody>
              {listaIngredientes.map((ingrediente, index) => {
                const porcentajePeso = (ingrediente.cantidadGramos / pesoTotalIngredientes) * 100;
                const esBaseNutricional = ingrediente.nombre.includes("Arveja");
                const esPasoHarinaArveja = tourActivo && pasoTour === 3 && esBaseNutricional;
                
                return (
                  <tr
                    key={index}
                    style={{
                      ...estilos.fila,
                      ...(esBaseNutricional ? estilos.filaDestacada : {}),
                    }}
                    className={esPasoHarinaArveja ? 'tour-resaltado' : ''}
                    id={esBaseNutricional ? 'fila-harina-arveja' : `fila-insumo-${index}`}
                  >
                    <td style={estilos.tdIngrediente}>
                      <div style={estilos.bloqueNombre}>
                        <span style={estilos.puntito}>●</span>
                        <strong style={estilos.nombreTexto}>{ingrediente.nombre}</strong>
                      </div>
                    </td>
                    
                    <td style={estilos.tdCentro}>{ingrediente.cantidadGramos} g</td>
                    
                    <td style={estilos.tdDerecha}>
                      <div style={estilos.bloqueProgreso}>
                        <span style={estilos.porcentajeTexto}>{porcentajePeso.toFixed(1)}%</span>
                        <div style={estilos.barraFondo}>
                          <div
                            style={{
                              ...estilos.barraProgreso,
                              width: `${porcentajePeso}%`,
                              backgroundColor: esBaseNutricional ? 'var(--verde-arveja)' : 'var(--rosa-primario)',
                            }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    
                    <td style={estilos.tdCentro}>{ingrediente.precioCompraBase}</td>
                    
                    <td style={{
                      ...estilos.tdDerecha,
                      fontWeight: '800',
                      color: esBaseNutricional ? 'var(--verde-arveja)' : 'var(--chocolate-oscuro)',
                    }}>
                      S/ {ingrediente.costoProrrateado.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div style={estilos.contenedorInfo}>
          <div style={estilos.tarjetaInfoVerde}>
            <h4>🌱 El Secreto Nutricional</h4>
            <p>
              Nuestra base nutritiva de <strong>Harina de Arveja (350 g)</strong> representa casi el <strong>40%</strong> del peso total de los ingredientes. Esto aporta proteínas vegetales naturales, minerales y fibra, convirtiendo a NutriArvi en un súper snack saludable sin saborizantes artificiales.
            </p>
          </div>
          <div style={estilos.tarjetaInfoRosa}>
            <h4>🍰 Estabilidad y Aglutinación</h4>
            <p>
              Utilizamos un <strong>17% de Harina Blanca Flor aglutinante</strong> para dar cohesión estructural a la masa, logrando que mantenga el grosor de 0.50 cm tras el horneado, en conjunto con ingredientes frescos de alta calidad.
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
  tarjetaPrincipal: {
    background: 'var(--vidrio-fondo)',
    border: '1px solid var(--vidrio-borde)',
    borderRadius: 'var(--radio-medio)',
    padding: '30px',
    boxShadow: 'var(--sombra-sutil)',
  },
  cabeceraSeccion: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap' as const,
    gap: '24px',
    borderBottom: '1px solid var(--chocolate-claro)',
    paddingBottom: '20px',
    marginBottom: '24px',
    textAlign: 'left' as const,
  },
  badge: {
    display: 'inline-block',
    background: 'var(--rosa-claro)',
    color: 'var(--rosa-brillante)',
    fontSize: '0.8rem',
    fontWeight: '700',
    padding: '4px 12px',
    borderRadius: 'var(--radio-circular)',
    marginBottom: '8px',
  },
  tituloSeccion: {
    fontSize: '1.6rem',
    color: 'var(--chocolate-oscuro)',
    fontWeight: '800',
  },
  subtitulo: {
    fontSize: '0.9rem',
    color: 'var(--chocolate-medio)',
    marginTop: '4px',
  },
  resumenFormulacion: {
    display: 'flex',
    gap: '16px',
  },
  bloqueResumen: {
    background: 'var(--chocolate-muy-claro)',
    border: '1px solid var(--chocolate-claro)',
    borderRadius: 'var(--radio-pequeno)',
    padding: '12px 18px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    transition: 'var(--transicion-suave)',
  },
  resumenLabel: {
    fontSize: '0.65rem',
    fontWeight: '700',
    color: 'var(--chocolate-medio)',
    letterSpacing: '1px',
    marginBottom: '4px',
  },
  resumenValorGreen: {
    fontSize: '1.25rem',
    color: 'var(--verde-arveja)',
    fontWeight: '800',
  },
  resumenValorPink: {
    fontSize: '1.25rem',
    color: 'var(--rosa-brillante)',
    fontWeight: '800',
  },
  tablaContenedor: {
    overflowX: 'auto' as const,
    marginBottom: '30px',
  },
  tabla: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    textAlign: 'left' as const,
  },
  tablaCabecera: {
    borderBottom: '2px solid var(--chocolate-claro)',
  },
  th: {
    padding: '12px 16px',
    fontSize: '0.85rem',
    color: 'var(--chocolate-medio)',
    fontWeight: '700',
  },
  thCentro: {
    padding: '12px 16px',
    fontSize: '0.85rem',
    color: 'var(--chocolate-medio)',
    fontWeight: '700',
    textAlign: 'center' as const,
  },
  thDerecha: {
    padding: '12px 16px',
    fontSize: '0.85rem',
    color: 'var(--chocolate-medio)',
    fontWeight: '700',
    textAlign: 'right' as const,
  },
  fila: {
    borderBottom: '1px solid var(--chocolate-claro)',
    transition: 'var(--transicion-suave)',
  },
  filaDestacada: {
    background: 'var(--verde-arveja-claro)',
    borderColor: 'rgba(133, 178, 50, 0.25)',
  },
  tdIngrediente: {
    padding: '16px',
  },
  bloqueNombre: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  puntito: {
    color: 'var(--rosa-primario)',
    fontSize: '0.7rem',
  },
  nombreTexto: {
    fontSize: '0.95rem',
    color: 'var(--chocolate-oscuro)',
  },
  tdCentro: {
    padding: '16px',
    textAlign: 'center' as const,
    fontSize: '0.9rem',
    color: 'var(--chocolate-oscuro)',
    fontWeight: '500',
  },
  tdDerecha: {
    padding: '16px',
    textAlign: 'right' as const,
    fontSize: '0.9rem',
    color: 'var(--chocolate-oscuro)',
  },
  bloqueProgreso: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '10px',
  },
  porcentajeTexto: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--chocolate-oscuro)',
    minWidth: '40px',
  },
  barraFondo: {
    width: '100px',
    height: '6px',
    background: 'var(--chocolate-claro)',
    borderRadius: 'var(--radio-circular)',
    overflow: 'hidden',
  },
  barraProgreso: {
    height: '100%',
    borderRadius: 'var(--radio-circular)',
  },
  contenedorInfo: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '20px',
  },
  tarjetaInfoVerde: {
    background: 'var(--verde-arveja-claro)',
    border: '1px solid rgba(133, 178, 50, 0.15)',
    borderRadius: 'var(--radio-medio)',
    padding: '20px',
    textAlign: 'left' as const,
  },
  tarjetaInfoRosa: {
    background: 'var(--rosa-claro)',
    border: '1px solid rgba(255, 117, 151, 0.15)',
    borderRadius: 'var(--radio-medio)',
    padding: '20px',
    textAlign: 'left' as const,
  },
};

export default TabFormulacion;
