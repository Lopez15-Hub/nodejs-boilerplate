import express from "express";

/**
 * Clase para crear rutas en nuestra aplicación.
 */
export class Route {
  /**
   * Crea una instancia de Route.
   * @param {string} path - El path base para las rutas.
   * @param {Object} controller - El controlador asociado a las rutas.
   */
  constructor(path, controller) {
    /**
     * El path base para las rutas.
     * @type {string}
     */
    this.path = path;

    /**
     * Router de Express asociado a las rutas.
     * @type {express.Router}
     */
    this.router = express.Router();

    /**
     * El controlador asociado a las rutas.
     * @type {Object}
     */
    this.controller = controller;

    /**
     * Método para importar las rutas configuradas.
     * @returns {Object} Objeto con el path y el router asociados a las rutas.
     */
    this.import = () => {
      this.registerRoutes();
      return {
        path: this.path,
        router: this.router,
      };
    };
  }

  /**
   * Construye una ruta completa a partir de un fragmento de ruta.
   * @param {string} route - El fragmento de ruta.
   * @returns {string} La ruta completa.
   */
  buildRoute = (route) => {
    const string = `${route.length ? `${this.path}/${route}` : ""}`;
    return string;
  };

  /**
   * Configura una ruta GET.
   * @param {string} route - El fragmento de ruta opcional.
   * @param {...Function} handlers - Los manejadores de la ruta.
   */
  get(route, ...handlers) {
    this.router.get(route, handlers);
  }

  /**
   * Configura una ruta POST.
   * @param {string} route - El fragmento de ruta opcional.
   * @param {...Function} handlers - Los manejadores de la ruta.
   */
  post(route = "", ...handlers) {
    this.router.post(this.buildRoute(route), handlers);
  }

  /**
   * Configura una ruta PUT.
   * @param {string} route - El fragmento de ruta opcional.
   * @param {...Function} handlers - Los manejadores de la ruta.
   */
  put(route = "", ...handlers) {
    this.router.put(this.buildRoute(route), handlers);
  }

  /**
   * Configura una ruta PATCH.
   * @param {string} route - El fragmento de ruta opcional.
   * @param {...Function} handlers - Los manejadores de la ruta.
   */
  patch(route = "", ...handlers) {
    this.router.patch(this.buildRoute(route), handlers);
  }

  /**
   * Configura una ruta DELETE.
   * @param {string} route - El fragmento de ruta opcional.
   * @param {...Function} handlers - Los manejadores de la ruta.
   */
  delete(route = "", ...handlers) {
    this.router.delete(this.buildRoute(route), handlers);
  }

  /**
   * Método para registrar las rutas definidas.
   */
  registerRoutes() {
    // Implementación específica de la lógica para registrar las rutas.
  }
}
