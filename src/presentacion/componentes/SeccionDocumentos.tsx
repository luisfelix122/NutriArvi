import React, { useState } from 'react';

export const SeccionDocumentos: React.FC = () => {
  const [abiertoId, setAbiertoId] = useState<string | null>(null);

  const alternarAcordeon = (id: string) => {
    setAbiertoId(abiertoId === id ? null : id);
  };

  const documentos = [
    {
      id: 'terminos',
      titulo: '📄 Términos y Condiciones de Uso',
      contenido: (
        <>
          <p style={estilos.parrafo}>
            Bienvenido a <strong>NutriArvi</strong>. Al acceder a nuestro sitio web interactivo y utilizar nuestros servicios, aceptas cumplir y estar sujeto a los siguientes términos y condiciones.
          </p>
          <ol style={estilos.lista}>
            <li>
              <strong>Naturaleza del Simulador Financiero:</strong> Los cálculos y proyecciones financieras mensuales provistos en esta página son simulaciones con fines ilustrativos basadas en los parámetros de planta reales provistos. Los resultados reales pueden variar en función de las fluctuaciones de precios de insumos, eficiencia de horneado y otros factores comerciales externos.
            </li>
            <li>
              <strong>Pedidos y Entregas:</strong> Al hacer clic en los enlaces de pedido de WhatsApp, se iniciará un canal de comunicación directo con nuestro equipo comercial para acordar de mutuo acuerdo la facturación, método de pago, tiempo de preparación de los lotes y condiciones de entrega del producto.
            </li>
            <li>
              <strong>Propiedad Intelectual:</strong> Todos los contenidos, recetas de insumos, marcas, isotipos, logotipos y diseños estilizados presentados en este portal son propiedad de NutriArvi. Queda prohibida su reproducción sin previa autorización.
            </li>
          </ol>
        </>
      ),
    },
    {
      id: 'politica',
      titulo: '🔒 Política de Privacidad y Tratamiento de Datos',
      contenido: (
        <>
          <p style={estilos.parrafo}>
            En <strong>NutriArvi</strong> valoramos tu privacidad. Esta política describe cómo manejamos tus datos e información:
          </p>
          <ol style={estilos.lista}>
            <li>
              <strong>Privacidad Local (LocalStorage):</strong> Tu información de reseñas personales ingresada se guarda 100% de manera local y exclusiva en el almacenamiento interno de tu navegador (LocalStorage). Nosotros no transmitimos, vendemos, ni transferimos esta información a servidores externos sin tu consentimiento.
            </li>
            <li>
              <strong>Interacciones de WhatsApp:</strong> Al interactuar con nuestro botón de contacto o pedido directo, la comunicación se traslada de manera segura y privada a los servidores oficiales de la plataforma WhatsApp, rigiéndose bajo los términos de privacidad correspondientes de dicha aplicación.
            </li>
            <li>
              <strong>Cookies del Portal:</strong> No utilizamos cookies de rastreo comercial invasivas. Solo hacemos uso del almacenamiento local técnico indispensable para asegurar que el portal funcione correctamente y persista el estado de tus consultas y reseñas.
            </li>
          </ol>
        </>
      ),
    },
    {
      id: 'descargo',
      titulo: '⚠️ Descargo de Responsabilidad y Datos de Planta',
      contenido: (
        <>
          <p style={estilos.parrafo}>
            <strong>Aclaración Importante sobre las Proyecciones Financieras:</strong>
          </p>
          <p style={estilos.parrafo}>
            Los datos cargados como "Valor de Planta Sustentado" representan las condiciones óptimas de nuestro lote de producción estándar: <strong>878 gramos de masa total bruta</strong>, que rinden exactamente <strong>90 mini galletas</strong> (agrupadas en <strong>10 bolsas de 9 unidades cada una</strong>), con una merma física fija de <strong>12%</strong>.
          </p>
          <p style={estilos.parrafo}>
            Los costos unitarios calculados (S/ 0.81 de insumos, S/ 0.30 empaque y S/ 0.47 CIF) son prorrateos de producción controlada. Los valores proyectados mensuales en base a escenarios asumen costos estables de materias primas. NutriArvi se reserva el derecho de ajustar la formulación, pesos o precios finales sugeridos (PVP S/ 2.00) ante eventualidades de abastecimiento o inflación comercial.
          </p>
        </>
      ),
    },
  ];

  return (
    <section style={estilos.seccion} id="seccion-legales-documentos">
      <div style={estilos.contenedor}>
        <div style={estilos.cabecera}>
          <h3 style={estilos.titulo}>Información Legal y Transparencia</h3>
          <p style={estilos.subtitulo}>Conoce nuestras políticas de transparencia, términos de simulación y condiciones de compra de manera sencilla y clara.</p>
        </div>

        <div style={estilos.acordeonGrupo}>
          {documentos.map((doc) => {
            const estaAbierto = abiertoId === doc.id;
            return (
              <div key={doc.id} style={estilos.acordeonItem} id={`documento-bloque-${doc.id}`}>
                <button
                  onClick={() => alternarAcordeon(doc.id)}
                  style={estilos.acordeonBoton}
                  id={`boton-acordeon-${doc.id}`}
                  aria-expanded={estaAbierto}
                >
                  <span style={estilos.acordeonTitulo}>{doc.titulo}</span>
                  <span style={estilos.acordeonFlecha}>{estaAbierto ? '▲' : '▼'}</span>
                </button>
                
                {estaAbierto && (
                  <div style={estilos.acordeonContenido} className="animar-aparicion" id={`contenido-acordeon-${doc.id}`}>
                    {doc.contenido}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const estilos = {
  seccion: {
    background: 'var(--chocolate-muy-claro)',
    padding: '50px 20px',
    borderTop: '1px solid var(--chocolate-claro)',
  },
  contenedor: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  cabecera: {
    textAlign: 'center' as const,
    marginBottom: '30px',
  },
  titulo: {
    fontSize: '1.6rem',
    fontWeight: '800',
    color: 'var(--chocolate-oscuro)',
  },
  subtitulo: {
    fontSize: '0.9rem',
    color: 'var(--chocolate-medio)',
    marginTop: '6px',
  },
  acordeonGrupo: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
  },
  acordeonItem: {
    background: 'var(--blanco-puro)',
    border: '1px solid var(--chocolate-claro)',
    borderRadius: 'var(--radio-medio)',
    overflow: 'hidden',
    boxShadow: 'var(--sombra-sutil)',
  },
  acordeonBoton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 24px',
    textAlign: 'left' as const,
    transition: 'var(--transicion-rapida)',
    '&:hover': {
      background: 'var(--rosa-claro)',
    },
  },
  acordeonTitulo: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: 'var(--chocolate-oscuro)',
  },
  acordeonFlecha: {
    fontSize: '0.8rem',
    color: 'var(--chocolate-medio)',
  },
  acordeonContenido: {
    padding: '24px',
    borderTop: '1px solid var(--chocolate-claro)',
    background: 'var(--blanco-puro)',
    textAlign: 'left' as const,
  },
  parrafo: {
    fontSize: '0.85rem',
    color: 'var(--chocolate-medio)',
    marginBottom: '12px',
    lineHeight: '1.6',
  },
  lista: {
    fontSize: '0.85rem',
    color: 'var(--chocolate-medio)',
    marginLeft: '20px',
    marginBottom: '12px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
};

export default SeccionDocumentos;
