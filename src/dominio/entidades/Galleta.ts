/**
 * Entidad que representa las características físicas e individuales de una mini galleta.
 */
export interface Galleta {
  diametroCm: number;
  espesorCm: number;
  volumenGeometricoCm3: number;
  pesoNetoGramo: number;
}

/**
 * Instancia por defecto con las especificaciones técnicas sustentadas de la planta.
 */
export const GALLETA_ESTANDAR: Galleta = {
  diametroCm: 4.00,
  espesorCm: 0.50,
  volumenGeometricoCm3: 6.28,
  pesoNetoGramo: 8.58
};
