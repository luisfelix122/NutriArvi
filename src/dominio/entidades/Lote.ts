/**
 * Entidad que representa las especificaciones de un lote completo de producción.
 * Contiene el balance de materia real sustentado de la planta.
 */
export interface Lote {
  masaBrutaGramos: number; // Sólidos + Líquidos
  mermaPorcentaje: number; // Porcentaje de pérdida por deshidratación en horneado
  mermaGramos: number; // Peso perdido en gramos
  masaNetaGramos: number; // Masa neta horneada total
  rendimientoUnidades: number; // Cantidad de mini galletas obtenidas
  unidadesPorBolsa: number; // Densidad de empaque comercial
  rendimientoBolsas: number; // Cantidad de bolsas exactas por lote
}

/**
 * Instancia por defecto con el Balance de Materia Real sustentado.
 */
export const LOTE_REAL_PLANTA: Lote = {
  masaBrutaGramos: 878.00,
  mermaPorcentaje: 12.0,
  mermaGramos: -105.36,
  masaNetaGramos: 772.64,
  rendimientoUnidades: 90,
  unidadesPorBolsa: 9,
  rendimientoBolsas: 10
};
