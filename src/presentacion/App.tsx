import React from 'react';
import { useNutriArvi } from './hooks/useNutriArvi';
import Encabezado from './componentes/Encabezado';
import PanelTabs from './componentes/PanelTabs';
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

      {/* Renderizado Dinámico de la Pestaña Activa */}
      <main style={estilos.main}>
        {pestanaActiva === 'balance' && (
          <TabBalanceMateria
            balanceLote={balanceLote}
            galletaEstandar={galletaEstandar}
          />
        )}

        {pestanaActiva === 'formulacion' && (
          <TabFormulacion
            listaIngredientes={listaIngredientes}
            costoTotalIngredientes={costoTotalIngredientes}
            pesoTotalIngredientes={pesoTotalIngredientes}
          />
        )}

        {pestanaActiva === 'costos' && (
          <TabCostos
            desgloseCostosUnitarios={desgloseCostosUnitarios}
          />
        )}

        {pestanaActiva === 'proyecciones' && (
          <TabProyecciones
            escenariosFinancierosFijos={escenariosFinancierosFijos}
            volumenSimulado={volumenSimulado}
            setVolumenSimulado={setVolumenSimulado}
            proyeccionSimulada={proyeccionSimulada}
            obtenerEnlaceWhatsAppPedidoEspecifico={obtenerEnlaceWhatsAppPedidoEspecifico}
          />
        )}
      </main>

      {/* Sección de Reseñas de Clientes (Siempre visible abajo, como pidió el usuario) */}
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

      {/* Sección de Acordeones Legales (Términos, Privacidad, Datos planta) */}
      <SeccionDocumentos />

      {/* Pie de Página */}
      <PiePagina />

      {/* Botón Flotante de WhatsApp para Consulta Rápida */}
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
  main: {
    flexGrow: 1,
    paddingTop: '10px',
  },
};

export default App;
