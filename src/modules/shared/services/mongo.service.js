import mongoose from "mongoose";
import { environment } from "../../../config/environment.js";

/**
 * Clase para gestionar la conexión a MongoDB.
 */
export class MongoDbService {
  /**
   * Conecta a la base de datos MongoDB utilizando la URL proporcionada en el entorno.
   * Si no se proporciona una URL, se utiliza la URL predeterminada "mongodb://localhost:27017/myapp".
   * @returns {Promise<void>} Una promesa que se resuelve una vez que la conexión se ha establecido con éxito.
   */
  static async connect() {
    await mongoose.connect(
      environment().mongoDbUrl ?? "mongodb://localhost:27017/myapp"
    );
  }
}
