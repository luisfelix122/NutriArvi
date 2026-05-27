import { useState, useMemo } from "react";
import { RepositorioDatosPlanta } from "../../infraestructura/repositorios/RepositorioDatosPlanta";
import { RepositorioResenasLocalStorage } from "../../infraestructura/repositorios/RepositorioResenasLocalStorage";
import { AdaptadorWhatsApp } from "../../infraestructura/servicios/AdaptadorWhatsApp";
import { calcularProyeccionesMensuales } from "../../aplicacion/casos-uso/CalcularProyecciones";
import { obtenerTodasLasResenas, crearYNuevaResena } from "../../aplicacion/casos-uso/GestionarResenas";
import { Resena } from "../../dominio/entidades/Resena";

// Instancias de infraestructura desacopladas
const repoPlanta = new RepositorioDatosPlanta();
const repoResenas = new RepositorioResenasLocalStorage();
const adaptadorWhatsApp = new AdaptadorWhatsApp();

export function useNutriArvi() {
  // Pestaña activa
  const [pestanaActiva, setPestanaActiva] = useState<string>("balance");

  // --- Datos de Planta e Ingredientes ---
  const galletaEstandar = useMemo(() => repoPlanta.obtenerEspecificacionGalleta(), []);
  const balanceLote = useMemo(() => repoPlanta.obtenerBalanceMateriaLote(), []);
  const listaIngredientes = useMemo(() => repoPlanta.obtenerIngredientesFormulacion(), []);
  const costoTotalIngredientes = useMemo(() => repoPlanta.obtenerCostoTotalIngredientes(), []);
  const pesoTotalIngredientes = useMemo(() => repoPlanta.obtenerPesoTotalIngredientes(), []);
  const escenariosFinancierosFijos = useMemo(() => repoPlanta.obtenerEscenariosPrecalculados(), []);
  const desgloseCostosUnitarios = useMemo(() => repoPlanta.obtenerDesgloseCostosUnitarios(), []);

  // --- Proyecciones Dinámicas (Calculadora) ---
  const [volumenSimulado, setVolumenSimulado] = useState<number>(450); // Valor inicial: Escenario Moderado
  
  const proyeccionSimulada = useMemo(() => {
    return calcularProyeccionesMensuales(volumenSimulado);
  }, [volumenSimulado]);

  // --- Gestión de Reseñas ---
  const [listaResenas, setListaResenas] = useState<Resena[]>(() => obtenerTodasLasResenas(repoResenas));
  const [resenaNombre, setResenaNombre] = useState<string>("");
  const [resenaCalificacion, setResenaCalificacion] = useState<number>(5);
  const [resenaComentario, setResenaComentario] = useState<string>("");
  const [resenaError, setResenaError] = useState<string>("");
  const [resenaExito, setResenaExito] = useState<boolean>(false);

  // Calificación promedio general de las reseñas
  const calificacionPromedio = useMemo(() => {
    if (listaResenas.length === 0) return 5;
    const total = listaResenas.reduce((sum, res) => sum + res.calificacion, 0);
    return Number((total / listaResenas.length).toFixed(1));
  }, [listaResenas]);

  const enviarNuevaResena = (e: React.FormEvent) => {
    e.preventDefault();
    setResenaError("");
    setResenaExito(false);

    try {
      const nueva = crearYNuevaResena(
        repoResenas,
        resenaNombre,
        resenaCalificacion,
        resenaComentario
      );
      
      // Actualizar la lista en pantalla
      setListaResenas([nueva, ...listaResenas.filter(r => r.id !== nueva.id)]);
      
      // Limpiar formulario y mostrar éxito
      setResenaNombre("");
      setResenaCalificacion(5);
      setResenaComentario("");
      setResenaExito(true);
      
      // Auto-ocultar mensaje de éxito
      setTimeout(() => setResenaExito(false), 5000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setResenaError(err.message);
      } else {
        setResenaError("Ocurrió un error inesperado al enviar la reseña.");
      }
    }
  };

  // --- Adaptador WhatsApp ---
  const enlaceWhatsAppInformativo = adaptadorWhatsApp.obtenerEnlacePedido();
  
  const obtenerEnlaceWhatsAppPedidoEspecifico = (bolsas: number) => {
    return adaptadorWhatsApp.obtenerEnlacePedido(bolsas);
  };

  return {
    // Pestañas
    pestanaActiva,
    setPestanaActiva,
    
    // Entidades estáticas
    galletaEstandar,
    balanceLote,
    listaIngredientes,
    costoTotalIngredientes,
    pesoTotalIngredientes,
    escenariosFinancierosFijos,
    desgloseCostosUnitarios,
    
    // Calculadora interactiva
    volumenSimulado,
    setVolumenSimulado,
    proyeccionSimulada,
    
    // Reseñas
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
    
    // Enlaces de pedido
    enlaceWhatsAppInformativo,
    obtenerEnlaceWhatsAppPedidoEspecifico
  };
}
