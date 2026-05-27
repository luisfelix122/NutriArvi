/**
 * Entidad que representa la reseña o comentario de un cliente.
 */
export interface Resena {
  id: string;
  autor: string;
  calificacion: number; // Del 1 al 5 estrellas
  comentario: string;
  fecha: string;
}

/**
 * Reseñas iniciales por defecto para mostrar en la página.
 */
export const RESENAS_POR_DEFECTO: Resena[] = [
  {
    id: "resena-1",
    autor: "Mariana Delgado (Mamá y Emprendedora)",
    calificacion: 5,
    comentario: "¡Súper crocantes y deliciosas! Al principio tenía dudas por la harina de arveja, pero a mis chicos les fascinaron para sus loncheras. Es genial darles algo nutritivo que de verdad disfruten.",
    fecha: "2026-05-15"
  },
  {
    id: "resena-2",
    autor: "Dr. Carlos Espinoza (Nutricionista)",
    calificacion: 5,
    comentario: "Excelente propuesta de balance alimenticio. Tienen un aporte proteico y de fibra vegetal notable gracias al leguminoso base, con azúcar controlada. Un snack saludable impecable.",
    fecha: "2026-05-20"
  },
  {
    id: "resena-3",
    autor: "Gonzalo Ruiz (Estudiante de Deporte)",
    calificacion: 4,
    comentario: "Muy buenas galletas, el toque de vainilla y canela es excelente. Te dan saciedad al toque por la harina de arveja. ¡Ideales para después de entrenar!",
    fecha: "2026-05-25"
  }
];
