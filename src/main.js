import { ExpressServer } from "./modules/shared/services/express.service.js";
import { AppModule } from "./app.module.js";
import { MongoDbService } from "./modules/shared/services/mongo.service.js";

/**
 * Función autoejecutable asincrónica para inicializar la aplicación.
 * Esta función se encarga de configurar y arrancar el servidor Express,
 * conectar a la base de datos MongoDB y registrar las rutas de la aplicación.
 * @async
 */
(async () => {
  // Configuración del servidor Express
  const server = new ExpressServer({
    enableCors: true, // Habilitar CORS
    enableMorgan: true, // Habilitar Morgan para el registro de solicitudes HTTP
  });

  // Configuración de MongoDB
  await MongoDbService.connect(); // Conectar a la base de datos MongoDB

  // Inicialización de la aplicación
  const app = new AppModule();

  // Registrar las rutas de la aplicación en el servidor Express
  server.registerRouters(app.routes);

  // Iniciar el servidor Express
  server.start();
})();
