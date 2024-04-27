import { Schema, model } from "mongoose";

// Definir el esquema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

// Definir el modelo
export const User = model("User", userSchema);
