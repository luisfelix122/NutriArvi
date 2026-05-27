import React from 'react';

export const PiePagina: React.FC = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer style={estilos.footer} id="pie-pagina-principal">
      <div style={estilos.contenedor}>
        <div style={estilos.grid}>
          
          <div style={estilos.marcaSeccion}>
            <h4 style={estilos.tituloMarca}>NutriArvi</h4>
            <p style={estilos.marcaTexto}>
              Revolucionando la repostería artesanal saludable con mini galletas hechas de harina de arveja de alto poder nutritivo.
            </p>
          </div>

          <div style={estilos.linksSeccion}>
            <h5 style={estilos.tituloSeccion}>Contacto Directo</h5>
            <ul style={estilos.lista}>
              <li>📱 Pedidos / WhatsApp: <strong>939997622</strong></li>
              <li>🇵🇪 Distribución en Piura, Perú</li>
              <li>⏰ Atención: Lunes a Sábados 8:00 AM - 6:00 PM</li>
            </ul>
          </div>

          <div style={estilos.valoresSeccion}>
            <h5 style={estilos.tituloSeccion}>Nuestros Compromisos</h5>
            <ul style={estilos.lista}>
              <li>🌱 Ingredientes 100% naturales</li>
              <li>🌾 Proteína vegetal sustentable</li>
              <li>❌ Sin conservantes artificiales</li>
            </ul>
          </div>

        </div>

        <div style={estilos.divisor}></div>

        <div style={estilos.creditos}>
          <p>© {anioActual} <strong>NutriArvi</strong>. El Poder Nutritivo. Todos los derechos reservados.</p>
          <p style={estilos.firma}>Hecho con amor y Clean Architecture para una alimentación saludable y consciente.</p>
        </div>

      </div>
    </footer>
  );
};

const estilos = {
  footer: {
    background: 'var(--chocolate-oscuro)',
    color: 'var(--chocolate-muy-claro)',
    padding: '50px 20px 30px 20px',
    borderTop: '1px solid var(--chocolate-medio)',
    textAlign: 'left' as const,
  },
  contenedor: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
    marginBottom: '30px',
  },
  marcaSeccion: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
  },
  tituloMarca: {
    fontSize: '1.6rem',
    fontWeight: '900',
    color: 'var(--rosa-primario)',
  },
  marcaTexto: {
    fontSize: '0.85rem',
    color: '#D4C9C3',
    lineHeight: '1.6',
    maxWidth: '300px',
  },
  linksSeccion: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
  },
  tituloSeccion: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: 'var(--blanco-puro)',
    borderBottom: '2px solid var(--rosa-primario)',
    paddingBottom: '6px',
    alignSelf: 'flex-start',
  },
  valoresSeccion: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
  },
  lista: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
    fontSize: '0.85rem',
    color: '#D4C9C3',
  },
  divisor: {
    height: '1px',
    background: 'var(--chocolate-medio)',
    margin: '30px 0 20px 0',
    opacity: '0.4',
  },
  creditos: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap' as const,
    gap: '12px',
    fontSize: '0.8rem',
    color: '#B5A59E',
  },
  firma: {
    fontStyle: 'italic',
  },
};

export default PiePagina;
