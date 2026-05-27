/**
 * Entidad que representa la proyección financiera mensual para un volumen específico de ventas.
 */
export interface Proyeccion {
  nombreEscenario: string;
  volumenBolsas: number;
  ingresosBrutos: number;
  costoDirecto: number;
  costosIndirectos: number; // Gastos Fijos
  utilidadNeta: number;
  margenUtilidadPorcentaje: number;
}

/**
 * Escenarios financieros fijos precalculados de planta.
 */
export const ESCENARIOS_PLANTA: Proyeccion[] = [
  {
    nombreEscenario: "Punto de Equilibrio",
    volumenBolsas: 236,
    ingresosBrutos: 472.00,
    costoDirecto: 261.49,
    costosIndirectos: 210.00,
    utilidadNeta: 0.00,
    margenUtilidadPorcentaje: 0.0
  },
  {
    nombreEscenario: "Escenario Moderado",
    volumenBolsas: 450,
    ingresosBrutos: 900.00,
    costoDirecto: 498.60,
    costosIndirectos: 210.00,
    utilidadNeta: 191.40,
    margenUtilidadPorcentaje: 21.3
  },
  {
    nombreEscenario: "Escenario Optimista",
    volumenBolsas: 650,
    ingresosBrutos: 1300.00,
    costoDirecto: 720.19,
    costosIndirectos: 210.00,
    utilidadNeta: 369.81,
    margenUtilidadPorcentaje: 28.4
  }
];
