import React from 'react';
import Logo from './Logo';

interface EncabezadoProps {
  calificacionPromedio: number;
  totalResenas: number;
}

export const Encabezado: React.FC<EncabezadoProps> = ({ calificacionPromedio, totalResenas }) => {
  return (
    <header style={estilos.header} id="encabezado-principal">
      <div style={estilos.contenedor}>
        <div style={estilos.bloqueLogo}>
          <Logo size={140} className="animar-aparicion" />
          <div style={estilos.infoMarca}>
            <span style={estilos.tag}>100% Nutritivas e Innovadoras</span>
            <h1 style={estilos.titulo}>NutriArvi</h1>
            <p style={estilos.eslogan}>El Poder Nutritivo de las Arvejas en Mini Galletas</p>
            <div style={estilos.estrellasMarca}>
              <span style={estilos.estrellasIcono}>★ ★ ★ ★ ★</span>
              <span style={estilos.resenasTexto}>
                {calificacionPromedio} ({totalResenas} valoraciones reales)
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const estilos = {
  header: {
    background: 'linear-gradient(135deg, var(--rosa-claro) 0%, var(--crema-fondo) 100%)',
    padding: '40px 20px 20px 20px',
    borderBottom: '1px solid var(--chocolate-claro)',
    textAlign: 'center' as const,
  },
  contenedor: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  bloqueLogo: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap' as const,
  },
  infoMarca: {
    textAlign: 'left' as const,
    maxWidth: '500px',
  },
  tag: {
    display: 'inline-block',
    background: 'var(--verde-arveja-claro)',
    color: 'var(--verde-arveja)',
    fontWeight: '700',
    fontSize: '0.85rem',
    padding: '4px 12px',
    borderRadius: 'var(--radio-circular)',
    marginBottom: '8px',
    border: '1px solid rgba(133, 178, 50, 0.2)',
  },
  titulo: {
    fontSize: '2.8rem',
    color: 'var(--chocolate-oscuro)',
    fontWeight: '800',
    letterSpacing: '-1px',
    marginBottom: '4px',
  },
  eslogan: {
    fontSize: '1.15rem',
    color: 'var(--chocolate-medio)',
    marginBottom: '12px',
  },
  estrellasMarca: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  estrellasIcono: {
    color: '#FFB800',
    fontWeight: 'bold',
  },
  resenasTexto: {
    fontSize: '0.9rem',
    color: 'var(--chocolate-medio)',
    fontWeight: '500',
  },
};

export default Encabezado;
