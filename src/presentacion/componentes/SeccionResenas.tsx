import React from 'react';
import { Resena } from '../../dominio/entidades/Resena';

interface SeccionResenasProps {
  listaResenas: Resena[];
  calificacionPromedio: number;
  resenaNombre: string;
  setResenaNombre: (nombre: string) => void;
  resenaCalificacion: number;
  setResenaCalificacion: (calificacion: number) => void;
  resenaComentario: string;
  setResenaComentario: (comentario: string) => void;
  resenaError: string;
  resenaExito: boolean;
  enviarNuevaResena: (e: React.FormEvent) => void;
}

export const SeccionResenas: React.FC<SeccionResenasProps> = ({
  listaResenas,
  calificacionPromedio,
  resenaNombre,
  setResenaNombre,
  resenaCalificacion,
  setResenaCalificacion,
  resenaComentario,
  setResenaComentario,
  resenaError,
  resenaExito,
  enviarNuevaResena,
}) => {
  return (
    <section style={estilos.seccion} id="seccion-resenas-clientes">
      <div style={estilos.contenedor}>
        
        <div style={estilos.cabecera}>
          <span style={estilos.tag}>Opiniones Reales</span>
          <h2 style={estilos.titulo}>Comentarios de Clientes</h2>
          <p style={estilos.subtitulo}>Nuestra mayor recompensa es saber que alimentamos de forma saludable e irresistible. ¡Déjanos tu opinión!</p>
        </div>

        <div style={estilos.grid}>
          
          {/* Formulario de Nueva Reseña */}
          <div className="tarjeta-premium" style={estilos.tarjetaFormulario}>
            <h3 style={estilos.tituloTarjeta}>Escribir mi opinión</h3>
            <p style={estilos.subtituloTarjeta}>Califica tu experiencia con NutriArvi. Se publicará instantáneamente en el navegador.</p>

            <form onSubmit={enviarNuevaResena} style={estilos.formulario} id="formulario-nueva-resena">
              
              <div style={estilos.campo}>
                <label style={estilos.label} htmlFor="nombre-autor">Tu nombre / Identificación:</label>
                <input
                  type="text"
                  id="nombre-autor"
                  value={resenaNombre}
                  onChange={(e) => setResenaNombre(e.target.value)}
                  placeholder="Ej. Luis Félix"
                  style={estilos.input}
                  required
                />
              </div>

              <div style={estilos.campo}>
                <label style={estilos.label}>Calificación:</label>
                <div style={estilos.estrellasSelector}>
                  {[1, 2, 3, 4, 5].map((estrella) => (
                    <button
                      type="button"
                      key={estrella}
                      onClick={() => setResenaCalificacion(estrella)}
                      style={{
                        ...estilos.estrellaBoton,
                        color: estrella <= resenaCalificacion ? '#FFB800' : 'var(--chocolate-claro)',
                      }}
                      id={`calificar-estrella-${estrella}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div style={estilos.campo}>
                <label style={estilos.label} htmlFor="comentario-resena">Tu opinión sobre las galletas:</label>
                <textarea
                  id="comentario-resena"
                  rows={4}
                  value={resenaComentario}
                  onChange={(e) => setResenaComentario(e.target.value)}
                  placeholder="Cuéntanos qué te pareció el sabor, crocantez y poder nutritivo..."
                  style={estilos.textarea}
                  required
                ></textarea>
              </div>

              {resenaError && (
                <div style={estilos.alertaError} id="resena-error-msj">
                  ⚠️ {resenaError}
                </div>
              )}

              {resenaExito && (
                <div style={estilos.alertaExito} id="resena-exito-msj">
                  🎉 ¡Muchas gracias! Tu opinión ha sido publicada directamente y guardada de forma segura en tu navegador.
                </div>
              )}

              <button type="submit" className="boton-interactivo" style={estilos.botonEnviar} id="boton-enviar-opinion">
                Publicar opinión directamente
              </button>

            </form>
          </div>

          {/* Historial de Reseñas de Clientes */}
          <div style={estilos.bloqueLista}>
            
            <div style={estilos.resumenValoracion}>
              <strong style={estilos.resumenNumero}>{calificacionPromedio}</strong>
              <div style={estilos.resumenDetalle}>
                <span style={estilos.estrellasIcono}>★ ★ ★ ★ ★</span>
                <span style={estilos.resumenCantidad}>{listaResenas.length} opiniones registradas</span>
              </div>
            </div>

            <div style={estilos.listaContenedor}>
              {listaResenas.map((resena) => (
                <div key={resena.id} className="tarjeta-premium animar-aparicion" style={estilos.tarjetaResena} id={`opinion-card-${resena.id}`}>
                  <div style={estilos.resenaCabecera}>
                    <strong style={estilos.resenaAutor}>{resena.autor}</strong>
                    <span style={estilos.resenaFecha}>{resena.fecha}</span>
                  </div>
                  <div style={estilos.resenaEstrellas}>
                    {'★'.repeat(resena.calificacion)}
                    {'☆'.repeat(5 - resena.calificacion)}
                  </div>
                  <p style={estilos.resenaTexto}>"{resena.comentario}"</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

const estilos = {
  seccion: {
    background: 'linear-gradient(180deg, var(--blanco-puro) 0%, var(--rosa-muy-claro) 100%)',
    padding: '60px 20px',
    borderTop: '1px solid var(--chocolate-claro)',
  },
  contenedor: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  cabecera: {
    textAlign: 'center' as const,
    marginBottom: '40px',
  },
  tag: {
    display: 'inline-block',
    background: 'var(--rosa-claro)',
    color: 'var(--rosa-brillante)',
    fontWeight: '700',
    fontSize: '0.85rem',
    padding: '4px 12px',
    borderRadius: 'var(--radio-circular)',
    marginBottom: '8px',
  },
  titulo: {
    fontSize: '2.2rem',
    fontWeight: '800',
    color: 'var(--chocolate-oscuro)',
    letterSpacing: '-0.5px',
  },
  subtitulo: {
    fontSize: '1rem',
    color: 'var(--chocolate-medio)',
    maxWidth: '650px',
    margin: '8px auto 0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '40px',
  },
  tarjetaFormulario: {
    textAlign: 'left' as const,
    alignSelf: 'start',
  },
  tituloTarjeta: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: 'var(--chocolate-oscuro)',
    marginBottom: '4px',
  },
  subtituloTarjeta: {
    fontSize: '0.85rem',
    color: 'var(--chocolate-medio)',
    marginBottom: '20px',
  },
  formulario: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  },
  campo: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '6px',
  },
  label: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--chocolate-oscuro)',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid var(--chocolate-claro)',
    borderRadius: 'var(--radio-pequeno)',
    fontFamily: 'var(--fuente-principal)',
    fontSize: '0.9rem',
    color: 'var(--chocolate-oscuro)',
    outline: 'none',
    transition: 'var(--transicion-rapida)',
    '&:focus': {
      borderColor: 'var(--rosa-primario)',
      boxShadow: '0 0 0 3px rgba(255, 117, 151, 0.1)',
    },
  },
  textarea: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid var(--chocolate-claro)',
    borderRadius: 'var(--radio-pequeno)',
    fontFamily: 'var(--fuente-principal)',
    fontSize: '0.9rem',
    color: 'var(--chocolate-oscuro)',
    outline: 'none',
    resize: 'vertical' as const,
    transition: 'var(--transicion-rapida)',
    '&:focus': {
      borderColor: 'var(--rosa-primario)',
      boxShadow: '0 0 0 3px rgba(255, 117, 151, 0.1)',
    },
  },
  estrellasSelector: {
    display: 'flex',
    gap: '6px',
  },
  estrellaBoton: {
    fontSize: '1.8rem',
    lineHeight: '1',
    transition: 'var(--transicion-rapida)',
  },
  alertaError: {
    background: '#FFF0F0',
    color: '#D93838',
    padding: '12px 16px',
    borderRadius: 'var(--radio-pequeno)',
    fontSize: '0.85rem',
    fontWeight: '700',
    border: '1px solid #FFD1D1',
  },
  alertaExito: {
    background: 'var(--verde-arveja-claro)',
    color: 'var(--verde-arveja)',
    padding: '12px 16px',
    borderRadius: 'var(--radio-pequeno)',
    fontSize: '0.85rem',
    fontWeight: '700',
    border: '1px solid rgba(133, 178, 50, 0.25)',
  },
  botonEnviar: {
    width: '100%',
    background: 'var(--rosa-primario)',
    color: 'var(--blanco-puro)',
    fontWeight: '800',
    fontSize: '0.95rem',
    padding: '14px 20px',
    borderRadius: 'var(--radio-pequeno)',
    boxShadow: 'var(--sombra-premium)',
    '&:hover': {
      background: 'var(--rosa-brillante)',
    },
  },
  bloqueLista: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
  },
  resumenValoracion: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    background: 'var(--chocolate-muy-claro)',
    border: '1px solid var(--chocolate-claro)',
    padding: '16px 24px',
    borderRadius: 'var(--radio-medio)',
    textAlign: 'left' as const,
  },
  resumenNumero: {
    fontSize: '2.5rem',
    fontWeight: '900',
    color: 'var(--chocolate-oscuro)',
    lineHeight: '1',
  },
  resumenDetalle: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  estrellasIcono: {
    color: '#FFB800',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  resumenCantidad: {
    fontSize: '0.85rem',
    color: 'var(--chocolate-medio)',
    fontWeight: '600',
    marginTop: '4px',
  },
  listaContenedor: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
    maxHeight: '480px',
    overflowY: 'auto' as const,
    paddingRight: '6px',
  },
  tarjetaResena: {
    textAlign: 'left' as const,
    padding: '20px',
  },
  resenaCabecera: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '4px',
  },
  resenaAutor: {
    fontSize: '0.95rem',
    color: 'var(--chocolate-oscuro)',
    fontWeight: '700',
  },
  resenaFecha: {
    fontSize: '0.75rem',
    color: 'var(--chocolate-medio)',
  },
  resenaEstrellas: {
    color: '#FFB800',
    fontSize: '0.9rem',
    letterSpacing: '1px',
    marginBottom: '8px',
  },
  resenaTexto: {
    fontSize: '0.85rem',
    color: 'var(--chocolate-medio)',
    fontStyle: 'italic',
    lineHeight: '1.5',
  },
};

export default SeccionResenas;
