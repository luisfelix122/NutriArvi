import { describe, it, expect } from "vitest";
import { calcularProyeccionesMensuales } from "./CalcularProyecciones";

describe("Caso de Uso: CalcularProyecciones", () => {
  it("debe calcular correctamente el escenario de Punto de Equilibrio (236 bolsas)", () => {
    const resultado = calcularProyeccionesMensuales(236);

    expect(resultado.volumenBolsas).toBe(236);
    expect(resultado.ingresosBrutos).toBe(472.00);
    // Costo directo unitario es S/ 1.108. Para 236 es 236 * 1.108 = 261.488, redondeado a 261.49
    expect(resultado.costoDirecto).toBe(261.49);
    expect(resultado.costosIndirectos).toBe(210.00);
    // Utilidad: 472 - 261.49 - 210 = 0.51, en la práctica es el punto de equilibrio mínimo viable
    expect(resultado.utilidadNeta).toBe(0.51);
  });

  it("debe calcular correctamente el Escenario Moderado (450 bolsas)", () => {
    const resultado = calcularProyeccionesMensuales(450);

    expect(resultado.volumenBolsas).toBe(450);
    expect(resultado.ingresosBrutos).toBe(900.00);
    expect(resultado.costoDirecto).toBe(498.60);
    expect(resultado.costosIndirectos).toBe(210.00);
    expect(resultado.utilidadNeta).toBe(191.40);
    expect(resultado.margenUtilidadPorcentaje).toBe(21.3);
  });

  it("debe calcular correctamente el Escenario Optimista (650 bolsas)", () => {
    const resultado = calcularProyeccionesMensuales(650);

    expect(resultado.volumenBolsas).toBe(650);
    expect(resultado.ingresosBrutos).toBe(1300.00);
    expect(resultado.costoDirecto).toBe(720.20);
    expect(resultado.costosIndirectos).toBe(210.00);
    expect(resultado.utilidadNeta).toBe(369.80);
    expect(resultado.margenUtilidadPorcentaje).toBe(28.4);
  });

  it("debe retornar utilidad neta negativa si las ventas están por debajo del punto de equilibrio", () => {
    const resultado = calcularProyeccionesMensuales(100);

    expect(resultado.utilidadNeta).toBeLessThan(0);
    expect(resultado.margenUtilidadPorcentaje).toBeLessThan(0);
  });
});
