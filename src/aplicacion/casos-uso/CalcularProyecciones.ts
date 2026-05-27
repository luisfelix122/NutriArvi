import { Proyeccion } from "../../dominio/entidades/Proyeccion";

/**
 * Realiza el cálculo dinámico de proyecciones financieras mensuales basado en el volumen de bolsas vendidas.
 * 
 * Fórmulas aplicadas basadas en los datos reales de la planta:
 * - Precio de Venta al Público (PVP): S/ 2.00 por bolsa.
 * - Costo Variable Directo: S/ 1.108 por bolsa (S/ 0.808 insumos + S/ 0.30 empaque/sticker).
 * - Costo Fijo (Indirectos CIF): S/ 210.00 mensuales.
 * 
 * @param volumenBolsas Cantidad de bolsas de galletas vendidas en el mes.
 * @returns Un objeto Proyeccion con los cálculos correspondientes.
 */
export function calcularProyeccionesMensuales(volumenBolsas: number): Proyeccion {
  const PRECIO_VENTA_BOLSA = 2.00;
  const COSTO_VARIABLE_BOLSA = 1.108;
  const COSTO_FIJO_CIF = 210.00;

  const ingresosBrutos = Number((volumenBolsas * PRECIO_VENTA_BOLSA).toFixed(2));
  const costoDirecto = Number((volumenBolsas * COSTO_VARIABLE_BOLSA).toFixed(2));
  const costosIndirectos = COSTO_FIJO_CIF;

  const utilidadNeta = Number((ingresosBrutos - costoDirecto - costosIndirectos).toFixed(2));
  const margenUtilidadPorcentaje = ingresosBrutos > 0 
    ? Number(((utilidadNeta / ingresosBrutos) * 100).toFixed(1)) 
    : 0;

  let nombreEscenario = "Escenario Personalizado";
  if (volumenBolsas === 236) {
    nombreEscenario = "Punto de Equilibrio";
  } else if (volumenBolsas === 450) {
    nombreEscenario = "Escenario Moderado";
  } else if (volumenBolsas === 650) {
    nombreEscenario = "Escenario Optimista";
  }

  return {
    nombreEscenario,
    volumenBolsas,
    ingresosBrutos,
    costoDirecto,
    costosIndirectos,
    utilidadNeta,
    margenUtilidadPorcentaje
  };
}
