import { Resena, RESENAS_POR_DEFECTO } from "../../dominio/entidades/Resena";
import { RepositorioResenas } from "../../dominio/servicios/RepositorioResenas";

/**
 * Implementación del almacén de reseñas usando LocalStorage.
 * Permite persistencia real en el navegador de los datos cargados por el usuario.
 */
export class RepositorioResenasLocalStorage implements RepositorioResenas {
  private readonly CLAVE_STORAGE = "nutriarvi_resenas_v1";

  obtenerTodas(): Resena[] {
    try {
      const datosRaw = localStorage.getItem(this.CLAVE_STORAGE);
      if (!datosRaw) {
        // Inicializa con las reseñas por defecto de la planta
        this.guardarColeccion(RESENAS_POR_DEFECTO);
        return RESENAS_POR_DEFECTO;
      }
      return JSON.parse(datosRaw) as Resena[];
    } catch (e) {
      console.error("Error cargando reseñas de LocalStorage, usando datos por defecto:", e);
      return RESENAS_POR_DEFECTO;
    }
  }

  guardar(nuevaResena: Resena): void {
    try {
      const actuales = this.obtenerTodas();
      // Agrega la nueva reseña al principio de la lista para destacar lo más reciente
      const actualizadas = [nuevaResena, ...actuales];
      this.guardarColeccion(actualizadas);
    } catch (e) {
      console.error("Error guardando reseña individual:", e);
    }
  }

  private guardarColeccion(coleccion: Resena[]): void {
    localStorage.setItem(this.CLAVE_STORAGE, JSON.stringify(coleccion));
  }
}
