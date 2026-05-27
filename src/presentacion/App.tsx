import React from 'react';
import { useNutriArvi } from './hooks/useNutriArvi';
import Encabezado from './componentes/Encabezado';
import PanelTabs from './componentes/PanelTabs';
import AsistenteMascota from './componentes/AsistenteMascota';
import TabBalanceMateria from './componentes/TabBalanceMateria';
import TabFormulacion from './componentes/TabFormulacion';
import TabCostos from './componentes/TabCostos';
import TabProyecciones from './componentes/TabProyecciones';
import SeccionResenas from './componentes/SeccionResenas';
import SeccionDocumentos from './componentes/SeccionDocumentos';
import BotonFlotanteWhatsApp from './componentes/BotonFlotanteWhatsApp';
import PiePagina from './componentes/PiePagina';

export const App: React.FC = () => {
  const {
    pestanaActiva,
    setPestanaActiva,
    galletaEstandar,
    balanceLote,
    listaIngredientes,
    costoTotalIngredientes,
    pesoTotalIngredientes,
    escenariosFinancierosFijos,
    desgloseCostosUnitarios,
    volumenSimulado,
    setVolumenSimulado,
    proyeccionSimulada,
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
    enlaceWhatsAppInformativo,
    obtenerEnlaceWhatsAppPedidoEspecifico,
    
    // Tour del Inversionista
    tourActivo,
    pasoTour,
    iniciarTour,
    detenerTour,
    siguientePasoTour,
    anteriorPasoTour
  } = useNutriArvi();

  return (
    <div style={estilos.appContenedor} id="contenedor-global-app">
      {/* Encabezado Principal */}
      <Encabezado
        calificacionPromedio={calificacionPromedio}
        totalResenas={listaResenas.length}
      />

      {/* Selector de Pestañas Navegables */}
      <PanelTabs
        pestanaActiva={pestanaActiva}
        onChangePestana={setPestanaActiva}
      />

      {/* Botón de Inicio de Tour interactivo del inversor */}
      <div style={estilos.contenedorTourAccion}>
        <button
          onClick={tourActivo ? detenerTour : iniciarTour}
          className="boton-interactivo"
          style={{
            ...estilos.botonTour,
            background: tourActivo ? '#D93838' : 'var(--verde-arveja)',
            boxShadow: tourActivo ? '0 4px 15px rgba(217, 56, 56, 0.25)' : '0 4px 15px rgba(133, 178, 50, 0.25)'
          }}
          id="boton-iniciar-tour-inversor"
        >
          {tourActivo ? "❌ Detener Tour de Inversión" : "🌱 ¡Iniciar Tour de Venta e Inversión con Arvejito!"}
        </button>
      </div>

      {/* Asistente Virtual: Arvejito explicativo (solo visible en modo estático convencional si NO está activo el tour) */}
      {!tourActivo && (
        <AsistenteMascota
          pestanaActiva={pestanaActiva}
          tourActivo={false}
          pasoTour={0}
          onSiguiente={() => {}}
          onAnterior={() => {}}
          onDetener={() => {}}
        />
      )}

      {/* Renderizado Dinámico de la Pestaña Activa con Props de Tour */}
      <main style={estilos.main}>
        {pestanaActiva === 'balance' && (
          <TabBalanceMateria
            balanceLote={balanceLote}
            galletaEstandar={galletaEstandar}
            tourActivo={tourActivo}
            pasoTour={pasoTour}
            onSiguiente={siguientePasoTour}
            onAnterior={anteriorPasoTour}
            onDetener={detenerTour}
          />
        )}

        {pestanaActiva === 'formulacion' && (
          <TabFormulacion
            listaIngredientes={listaIngredientes}
            costoTotalIngredientes={costoTotalIngredientes}
            pesoTotalIngredientes={pesoTotalIngredientes}
            tourActivo={tourActivo}
            pasoTour={pasoTour}
            onSiguiente={siguientePasoTour}
            onAnterior={anteriorPasoTour}
            onDetener={detenerTour}
          />
        )}

        {pestanaActiva === 'costos' && (
          <TabCostos
            desgloseCostosUnitarios={desgloseCostosUnitarios}
            tourActivo={tourActivo}
            pasoTour={pasoTour}
            onSiguiente={siguientePasoTour}
            onAnterior={anteriorPasoTour}
            onDetener={detenerTour}
          />
        )}

        {pestanaActiva === 'proyecciones' && (
          <TabProyecciones
            escenariosFinancierosFijos={escenariosFinancierosFijos}
            volumenSimulado={volumenSimulado}
            setVolumenSimulado={setVolumenSimulado}
            proyeccionSimulada={proyeccionSimulada}
            obtenerEnlaceWhatsAppPedidoEspecifico={obtenerEnlaceWhatsAppPedidoEspecifico}
            tourActivo={tourActivo}
            pasoTour={pasoTour}
            onSiguiente={siguientePasoTour}
            onAnterior={anteriorPasoTour}
            onDetener={detenerTour}
          />
        )}
      </main>

      {/* Sección de Reseñas de Clientes */}
      <SeccionResenas
        listaResenas={listaResenas}
        calificacionPromedio={calificacionPromedio}
        resenaNombre={resenaNombre}
        setResenaNombre={setResenaNombre}
        resenaCalificacion={resenaCalificacion}
        setResenaCalificacion={setResenaCalificacion}
        resenaComentario={resenaComentario}
        setResenaComentario={setResenaComentario}
        resenaError={resenaError}
        resenaExito={resenaExito}
        enviarNuevaResena={enviarNuevaResena}
      />

      {/* Sección de Acordeones Legales */}
      <SeccionDocumentos />

      {/* Pie de Página */}
      <PiePagina />

      {/* Botón Flotante de WhatsApp */}
      <BotonFlotanteWhatsApp enlaceWhatsApp={enlaceWhatsAppInformativo} />
    </div>
  );
};

const estilos = {
  appContenedor: {
    display: 'flex',
    flexDirection: 'column' as const,
    minHeight: '100vh',
  },
  contenedorTourAccion: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 15px auto',
    padding: '0 20px',
    width: '100%',
    maxWidth: '1200px',
  },
  botonTour: {
    color: 'var(--blanco-puro)',
    fontWeight: '800',
    fontSize: '0.95rem',
    padding: '12px 24px',
    borderRadius: 'var(--radio-circular)',
    transition: 'var(--transicion-rapida)',
  },
  main: {
    flexGrow: 1,
    paddingTop: '10px',
  },
};

export default App;
