import { DotEnvService } from "../modules/shared/services/dot-env.service.js";

/**
 * Función para obtener variables de entorno relacionadas con la configuración del servidor.
 * Utiliza el servicio DotEnvService para acceder a las variables de entorno definidas en un archivo .env.
 * @returns {Object} Un objeto que contiene la configuración del servidor obtenida de las variables de entorno.
 * @property {string} port - El puerto en el que se ejecutará el servidor.
 * @property {string} secretKey - La clave secreta utilizada para firmar tokens de autenticación.
 * @property {string} mongoDbUrl - La URL de conexión a la base de datos MongoDB.
 */
export const environment = () => ({
  port: DotEnvService.get("PORT"),
  secretKey: DotEnvService.get("SERVER_SECRET_KEY"),
  mongoDbUrl: DotEnvService.get("MONGODB_URL"),
});
