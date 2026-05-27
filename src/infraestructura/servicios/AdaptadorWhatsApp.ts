/**
 * Adaptador de infraestructura para interactuar con la API externa de WhatsApp.
 */
export class AdaptadorWhatsApp {
  private readonly NUMERO_CONTACTO = "51939997622"; // +51 de Perú + Número 939997622

  /**
   * Genera la URL de enlace directo para iniciar el chat de WhatsApp con un mensaje preconfigurado.
   * 
   * @param cantidadBolsas Cantidad opcional de bolsas de galletas que desea pedir.
   * @returns La URL completa codificada para su redirección.
   */
  obtenerEnlacePedido(cantidadBolsas?: number): string {
    let mensaje = "¡Hola NutriArvi! 🍪 Me gustaría tener más información sobre sus deliciosas y nutritivas galletas de arveja.";
    
    if (cantidadBolsas && cantidadBolsas > 0) {
      mensaje = `¡Hola NutriArvi! 🍪 Me gustaría realizar un pedido de *${cantidadBolsas} bolsa(s)* de sus galletas de arveja de poder nutritivo. ¿Me podrían indicar los pasos a seguir? Muchas gracias.`;
    }

    return `https://wa.me/${this.NUMERO_CONTACTO}?text=${encodeURIComponent(mensaje)}`;
  }
}
