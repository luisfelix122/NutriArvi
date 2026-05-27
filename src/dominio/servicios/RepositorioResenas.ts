import { Resena } from "../entidades/Resena";

/**
 * Interfaz que define el contrato para el almacenamiento y recuperación de reseñas.
 * Sigue el principio de Inversión de Dependencias (DIP) de Clean Architecture.
 */
export interface RepositorioResenas {
  obtenerTodas(): Resena[];
  guardar(resena: Resena): void;
}
