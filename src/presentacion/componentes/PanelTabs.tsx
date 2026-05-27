import React from 'react';

interface PanelTabsProps {
  pestanaActiva: string;
  onChangePestana: (pestana: string) => void;
}

export const PanelTabs: React.FC<PanelTabsProps> = ({ pestanaActiva, onChangePestana }) => {
  const pestañas = [
    { id: 'balance', titulo: '⚙️ Balance de Materia', descripcion: 'Física y Rendimiento' },
    { id: 'formulacion', titulo: '🥣 Formulación e Insumos', descripcion: 'Receta y Costo base' },
    { id: 'costos', titulo: '📊 Estructura de Costos', descripcion: 'Análisis de precios' },
    { id: 'proyecciones', titulo: '💰 Calculadora Financiera', descripcion: 'Simulación y escenarios' },
  ];

  return (
    <div style={estilos.contenedorTabs} id="contenedor-pestanas">
      {pestañas.map((pestana) => {
        const estaActiva = pestanaActiva === pestana.id;
        return (
          <button
            key={pestana.id}
            onClick={() => onChangePestana(pestana.id)}
            style={{
              ...estilos.botonTab,
              ...(estaActiva ? estilos.botonTabActivo : {}),
            }}
            id={`tab-${pestana.id}`}
            aria-selected={estaActiva}
          >
            <span style={{
              ...estilos.tituloTab,
              ...(estaActiva ? estilos.tituloTabActivo : {}),
            }}>{pestana.titulo}</span>
            <span style={estilos.descripcionTab}>{pestana.descripcion}</span>
          </button>
        );
      })}
    </div>
  );
};

const estilos = {
  contenedorTabs: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '12px',
    maxWidth: '1200px',
    margin: '30px auto',
    padding: '0 20px',
  },
  botonTab: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 20px',
    background: 'var(--blanco-puro)',
    border: '1px solid var(--chocolate-claro)',
    borderRadius: 'var(--radio-medio)',
    boxShadow: 'var(--sombra-sutil)',
    textAlign: 'center' as const,
    transition: 'var(--transicion-suave)',
  },
  botonTabActivo: {
    background: 'var(--rosa-claro)',
    borderColor: 'var(--rosa-primario)',
    boxShadow: 'var(--sombra-premium)',
    transform: 'scale(1.03)',
  },
  tituloTab: {
    fontSize: '1rem',
    fontWeight: '700',
    color: 'var(--chocolate-oscuro)',
    marginBottom: '4px',
    transition: 'var(--transicion-rapida)',
  },
  tituloTabActivo: {
    color: 'var(--rosa-brillante)',
  },
  descripcionTab: {
    fontSize: '0.8rem',
    color: 'var(--chocolate-medio)',
    fontWeight: '500',
  },
};

export default PanelTabs;
