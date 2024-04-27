/**
 * Clase base para un repositorio.
 * Los repositorios se utilizan para gestionar el acceso a datos en una aplicación.
 * Proporcionan métodos para realizar operaciones de lectura, escritura y eliminación en una fuente de datos.
 */
export class Repository {
  /**
   * Crea una instancia de Repository.
   */
  constructor(entity) {
    this.entity = entity;
  }

  async findAll() {
    return await this.entity.find();
  }
  async create(data) {
    return await this.entity.create(data);
  }
  async updateOne(id, newData) {
    return await this.entity.findByIdAndUpdate(id, newData, { new: true });
  }
  async deleteOne(id) {
    return await this.entity.findByIdAndDelete(id);
  }
  async findById(id) {
    return await this.entity.findById(id);
  }
}
