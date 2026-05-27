/**
 * Entidad que representa un insumo o ingrediente utilizado en la formulación de las galletas.
 */
export interface Ingrediente {
  nombre: string;
  cantidadGramos: number;
  precioCompraBase: string; // Ej. "1 kg = S/ 10.00" o "25 g = S/ 1.90"
  costoProrrateado: number; // Costo exacto correspondiente a la cantidad usada en el lote
}

/**
 * Constantes de los ingredientes sustentados en la formulación del lote.
 */
export const INGREDIENTES_LOTE: Ingrediente[] = [
  {
    nombre: "Harina de Arveja (Base nutricional)",
    cantidadGramos: 350,
    precioCompraBase: "1 kg = S/ 10.00",
    costoProrrateado: 3.50
  },
  {
    nombre: "Harina Preparada Blanca Flor (Aglutinante)",
    cantidadGramos: 150,
    precioCompraBase: "1 kg = S/ 7.80",
    costoProrrateado: 1.17
  },
  {
    nombre: "Polvo de Hornear (Royal)",
    cantidadGramos: 30,
    precioCompraBase: "25 g = S/ 1.90",
    costoProrrateado: 0.23
  },
  {
    nombre: "Azúcar Rubia",
    cantidadGramos: 30,
    precioCompraBase: "1 kg = S/ 4.00",
    costoProrrateado: 0.24
  },
  {
    nombre: "Margarina Manty",
    cantidadGramos: 40,
    precioCompraBase: "300 g = S/ 5.40",
    costoProrrateado: 0.72
  },
  {
    nombre: "Yogur Natural",
    cantidadGramos: 90,
    precioCompraBase: "500 g = S/ 4.20",
    costoProrrateado: 0.76
  },
  {
    nombre: "Huevo fresco",
    cantidadGramos: 120,
    precioCompraBase: "55 g = S/ 0.50",
    costoProrrateado: 1.09
  },
  {
    nombre: "Esencias (Vainilla/Canela)",
    cantidadGramos: 15,
    precioCompraBase: "100 g = S/ 2.50",
    costoProrrateado: 0.38
  }
];

export const TOTAL_INGREDIENTES_CANTIDAD = 878; // gramos
export const TOTAL_INGREDIENTES_COSTO = 8.08; // S/
