/**
 * Clase base para los controladores.
 */
export class Controller {
  /**
   * Crea una instancia de Controller.
   * @param {Object} service - Instancia del servicio asociado al controlador.
   */
  constructor(service) {
    /**
     * Instancia del servicio asociado al controlador.
     * @type {Object}
     */
    this.service = service;
  }
}
