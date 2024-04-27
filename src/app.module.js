import { Module } from "./modules/shared/adapters/module.adapter.js";
import { AppRoutes } from "./app.routes.js";
import { UsersRoutes } from "./modules/users/routes/users.routes.js";

/**
 * Clase que representa el módulo principal de la aplicación.
 * @extends Module
 */
export class AppModule extends Module {
  /**
   * Constructor de la clase AppModule.
   * Este es el modulo principal de nuestra aplicación.
   * En este modulo se dan de alta las rutas de todos los módulos de nuestra aplicación.
   * Para hacer esto, debes utilizar la función import() proveniente de cada módulo.
   */
  constructor() {
    // Llama al constructor de la clase padre (Module) pasando las rutas importadas de UsersRoutes y AppRoutes.
    super(new UsersRoutes().import(), new AppRoutes().import());
  }
}
