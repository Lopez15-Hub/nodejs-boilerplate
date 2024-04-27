import { environment } from "../../../config/environment.js";

/**
 * Clase para servicios REST.
 */
export class RestService {
  /**
   * Crea una instancia de RestService.
   * @param {string} endpoint - El endpoint del servicio REST.
   */
  constructor(endpoint) {
    /**
     * URL base del servicio REST.
     * @type {string}
     */
    this.baseUrl = `${environment()}/${endpoint}`;
  }

  /**
   * Genera una ruta completa a partir de un fragmento de ruta.
   * @param {string} path - El fragmento de ruta.
   * @returns {string} La ruta completa.
   */
  route = (path) => `${this.baseUrl}/${path}`;
}
