import "dotenv/config";

/**
 * Clase para acceder a variables de entorno definidas en un archivo .env.
 * Utiliza la librería dotenv para cargar las variables de entorno desde el archivo .env.
 */
export class DotEnvService {
  /**
   * Obtiene el valor de una variable de entorno.
   * @param {string} varName - El nombre de la variable de entorno.
   * @returns {string | undefined} El valor de la variable de entorno o undefined si no está definida.
   */
  static get = (varName) => Object(process.env)[varName];
}
