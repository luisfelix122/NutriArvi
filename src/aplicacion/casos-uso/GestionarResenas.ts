import { Resena } from "../../dominio/entidades/Resena";
import { RepositorioResenas } from "../../dominio/servicios/RepositorioResenas";

/**
 * Caso de uso para obtener la lista de todas las reseñas de la aplicación.
 */
export function obtenerTodasLasResenas(repositorio: RepositorioResenas): Resena[] {
  return repositorio.obtenerTodas();
}

/**
 * Caso de uso para añadir una nueva reseña de usuario.
 * Valida los datos e inicializa la fecha actual.
 * 
 * @returns La reseña creada con su ID y fecha formateada.
 */
export function crearYNuevaResena(
  repositorio: RepositorioResenas,
  autor: string,
  calificacion: number,
  comentario: string
): Resena {
  if (!autor.trim()) {
    throw new Error("El nombre del autor no puede estar vacío.");
  }
  if (calificacion < 1 || calificacion > 5) {
    throw new Error("La calificación debe estar entre 1 y 5 estrellas.");
  }
  if (!comentario.trim()) {
    throw new Error("El comentario no puede estar vacío.");
  }

  const nueva: Resena = {
    id: `resena-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    autor: autor.trim(),
    calificacion: Math.floor(calificacion),
    comentario: comentario.trim(),
    fecha: new Date().toISOString().split("T")[0] // Formato YYYY-MM-DD
  };

  repositorio.guardar(nueva);
  return nueva;
}
