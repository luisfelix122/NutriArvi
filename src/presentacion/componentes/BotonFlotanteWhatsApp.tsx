import React from 'react';

interface BotonFlotanteWhatsAppProps {
  enlaceWhatsApp: string;
}

export const BotonFlotanteWhatsApp: React.FC<BotonFlotanteWhatsAppProps> = ({ enlaceWhatsApp }) => {
  return (
    <div style={estilos.contenedor} id="boton-whatsapp-flotante-caja">
      {/* Tooltip con llamado a la acción */}
      <div style={estilos.tooltip} id="whatsapp-flotante-tooltip">
        🌟 ¡Pide tus galletas aquí!
      </div>
      
      <a
        href={enlaceWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        style={estilos.boton}
        id="enlace-whatsapp-flotante"
        title="Enviar mensaje directo por WhatsApp"
      >
        {/* Ícono de WhatsApp Vectorial */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={estilos.icono}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 1.886.52 3.65 1.428 5.163l-1.393 5.092 5.21-1.368A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm5.827 13.56c-.255-.127-1.507-.743-1.74-.828-.233-.085-.403-.127-.573.127-.17.255-.658.828-.807.998-.148.17-.297.19-.552.064-.255-.128-1.076-.397-2.05-1.267-.758-.676-1.27-1.512-1.418-1.767-.149-.255-.016-.393.111-.52.115-.114.255-.297.382-.446.128-.149.17-.255.255-.425.085-.17.043-.319-.021-.446-.064-.128-.573-1.38-.785-1.89-.207-.502-.416-.434-.573-.442l-.488-.008c-.17 0-.446.064-.68.319-.233.255-.89.871-.89 2.124 0 1.253.912 2.464 1.04 2.634.127.17 1.794 2.739 4.347 3.84.607.262 1.08.419 1.45.537.61.194 1.164.167 1.602.101.488-.072 1.507-.616 1.719-1.21.212-.595.212-1.105.149-1.21-.064-.107-.234-.17-.489-.298z"
            fill="#FFFFFF"
          />
        </svg>
      </a>
    </div>
  );
};

const estilos = {
  contenedor: {
    position: 'fixed' as const,
    bottom: '30px',
    right: '30px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-end',
    pointerEvents: 'none' as const,
  },
  tooltip: {
    background: 'var(--chocolate-oscuro)',
    color: 'var(--blanco-puro)',
    fontSize: '0.8rem',
    fontWeight: '700',
    padding: '8px 14px',
    borderRadius: '8px',
    marginBottom: '10px',
    boxShadow: 'var(--sombra-media)',
    border: '1px solid var(--chocolate-claro)',
    pointerEvents: 'auto' as const,
    animation: 'aparecer 0.4s ease-out forwards',
  },
  boton: {
    width: '60px',
    height: '60px',
    background: '#25D366', /* Color oficial WhatsApp */
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 8px 30px rgba(37, 211, 102, 0.45)',
    transition: 'var(--transicion-suave)',
    pointerEvents: 'auto' as const,
    '&:hover': {
      transform: 'scale(1.1) rotate(8deg)',
      background: '#20BA5A',
    },
  },
  icono: {
    display: 'block',
  },
};

export default BotonFlotanteWhatsApp;
