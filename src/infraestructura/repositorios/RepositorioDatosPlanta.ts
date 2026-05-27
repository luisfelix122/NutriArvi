import { GALLETA_ESTANDAR, Galleta } from "../../dominio/entidades/Galleta";
import { LOTE_REAL_PLANTA, Lote } from "../../dominio/entidades/Lote";
import { INGREDIENTES_LOTE, TOTAL_INGREDIENTES_CANTIDAD, TOTAL_INGREDIENTES_COSTO, Ingrediente } from "../../dominio/entidades/Ingrediente";
import { ESCENARIOS_PLANTA, Proyeccion } from "../../dominio/entidades/Proyeccion";

/**
 * Repositorio de infraestructura que provee acceso a todos los datos estáticos de planta,
 * formulación e insumos sustentados.
 */
export class RepositorioDatosPlanta {
  obtenerEspecificacionGalleta(): Galleta {
    return GALLETA_ESTANDAR;
  }

  obtenerBalanceMateriaLote(): Lote {
    return LOTE_REAL_PLANTA;
  }

  obtenerIngredientesFormulacion(): Ingrediente[] {
    return INGREDIENTES_LOTE;
  }

  obtenerCostoTotalIngredientes(): number {
    return TOTAL_INGREDIENTES_COSTO;
  }

  obtenerPesoTotalIngredientes(): number {
    return TOTAL_INGREDIENTES_CANTIDAD;
  }

  obtenerEscenariosPrecalculados(): Proyeccion[] {
    return ESCENARIOS_PLANTA;
  }

  obtenerDesgloseCostosUnitarios(): { nombre: string; valor: number; porcentaje: number }[] {
    return [
      { nombre: "Costo Directo - Materia Prima / Insumos", valor: 0.81, porcentaje: 40.4 },
      { nombre: "Costo Directo - Material de Empaque y Sticker", valor: 0.30, porcentaje: 15.0 },
      { nombre: "Costos Indirectos de Fabricación (CIF Prorrateados)", valor: 0.47, porcentaje: 23.3 },
      { nombre: "Margen de Ganancia Neto por Unidad", valor: 0.43, porcentaje: 21.3 }
    ];
  }
}
