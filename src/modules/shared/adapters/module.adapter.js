/**
 * Clase que representa un módulo de rutas.
 */
export class Module {
  /**
   * Crea una instancia de Module.
   * @param {...Array} args - Los argumentos que representan las rutas del módulo.
   */
  constructor(...args) {
    /**
     * Array que contiene las rutas del módulo.
     * @type {Array}
     */
    this.routes = [...args];
  }
}
