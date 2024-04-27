import express from "express";
import cors from "cors";
import morgan from "morgan";
import { environment } from "../../../config/environment.js";

/**
 * Clase para configurar y gestionar un servidor Express.
 * Permite registrar middleware, routers y iniciar el servidor.
 */
export class ExpressServer {
  /**
   * Instancia de la aplicación Express.
   * @type {express.Application}
   * @private
   */
  #app;

  /**
   * Crea una instancia de ExpressServer.
   * @param {Object} options - Opciones de configuración.
   * @param {boolean} options.enableCors - Indica si se habilita el middleware CORS.
   * @param {boolean} options.enableMorgan - Indica si se habilita el middleware Morgan.
   */
  constructor({ enableCors, enableMorgan }) {
    /**
     * Instancia de la aplicación Express.
     * @private
     */
    this.#app = express();

    // Middlewares por defecto
    if (enableCors) this.#app.use(cors());
    if (enableMorgan) this.#app.use(morgan("common"));
  }

  /**
   * Registra middleware en la aplicación Express.
   * @param {Function[]} middlewares - Los middleware a registrar.
   */
  registerMiddlewares(middlewares = []) {
    middlewares.forEach((middleware) => this.#app.use(middleware));
  }

  /**
   * Registra routers en la aplicación Express.
   * @param {Object[]} routers - Los routers a registrar.
   */
  registerRouters(routers) {
    routers.forEach((router) => {
      this.#app.use(router.path, router.router);

      router.router.stack.forEach(({ route }) => {
        const { stack } = route;
        console.log(
          `Route Mapped: [${this.#getRestMethod(route.methods)}] ${
            stack[0].name
          } ~ ${route.path.length ? route.path : "/"}`
        );
      });
    });
  }

  /**
   * Obtiene el método HTTP asociado a una ruta.
   * @param {Object} methods - Métodos HTTP definidos para la ruta.
   * @returns {string} Método HTTP asociado.
   * @private
   */
  #getRestMethod(methods) {
    if (methods.get) return "GET";
    if (methods.post) return "POST";
    if (methods.put) return "PUT";
    if (methods.delete) return "DELETE";
    if (methods.patch) return "PATCH";
  }

  /**
   * Inicia el servidor Express en el puerto especificado.
   * @param {number} customPort - El puerto personalizado, si se proporciona.
   */
  start(customPort) {
    const { port } = environment();
    this.#app.listen(port ?? customPort, () =>
      console.log(`Server on port ${port ?? customPort}`)
    );
  }

  /**
   * Método para registrar rutas definidas.
   * @abstract
   */
  registerRoutes() {
    // Implementación específica de la lógica para registrar las rutas.
  }
}
