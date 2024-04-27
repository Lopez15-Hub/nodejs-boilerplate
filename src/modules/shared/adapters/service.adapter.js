/**
 * Clase base para un servicio.
 * Los servicios se utilizan para encapsular la lógica de negocio de una aplicación y realizar operaciones en los datos.
 */
export class Service {
  /**
   * Crea una instancia de Service.
   */
  constructor(repository) {
    this.repository = repository;
    // Constructor vacío
  }
}
