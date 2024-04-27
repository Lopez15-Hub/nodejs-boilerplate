import Joi from "joi";

/**
 * Esquema de datos para crear un nuevo usuario.
 * @typedef {Object} CreateUserDto
 * @property {string} name - El nombre del usuario. Debe ser una cadena de caracteres.
 *                            Máximo 30 caracteres.
 *                            Este campo es obligatorio.
 * @property {string} lastName - El apellido del usuario. Debe ser una cadena de caracteres.
 *                                Máximo 30 caracteres.
 *                                Este campo es obligatorio.
 * @property {number} age - La edad del usuario. Debe ser un número.
 *                          La edad mínima permitida es 16 años y la máxima 96 años.
 *                          Este campo es obligatorio.
 */

/**
 * Esquema Joi para validar un objeto CreateUserDto.
 * @type {import('joi').ObjectSchema}
 */
export const createUserDto = Joi.object({
  name: Joi.string().max(30).required(),
  lastName: Joi.string().max(30).required(),
  age: Joi.number().min(16).max(96).required(),
});
