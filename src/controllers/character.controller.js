import Character from "../models/character.model.js";
import characterValidator from "../validators/characterValidator.js";

// Crear Character
export const createCharacter = async (req, res) => {
  const { name, ki, race, gender, description } = req.body;

  const errores = characterValidator({ name, ki, race, gender, description });

  if (errores.length > 0) {
    return res.status(400).json({ errores });
  }

  try {
    const existingCharacter = await Character.findOne({ where: { name } });

    if (existingCharacter) {
      return res.status(409).json({ error: "Ya existe un personaje con ese nombre" });
    }

    const character = await Character.create({ name, ki, race, gender, description });
    res.status(201).json(character);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener todos los Characters
export const getAllCharacters = async (req, res) => {
  try {
    const characters = await Character.findAll();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener Character por ID
export const getCharacterById = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ error: "El ID debe ser un numero entero" });
  }

  try {
    const character = await Character.findByPk(id);
    if (!character) {
      return res.status(404).json({ message: "Personaje no encontrado" });
    }
    res.json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar Character
export const updateCharacter = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ error: "El ID debe ser un numero entero" });
  }

  const datosAActualizar = req.body;

  if (Object.keys(datosAActualizar).length === 0) {
    return res.status(400).json({ error: "No se enviaron datos para actualizar" });
  }

  const errores = characterValidator(datosAActualizar, true);

  if (errores.length > 0) {
    return res.status(400).json({ errores });
  }

  try {
    const [updated] = await Character.update(datosAActualizar, {
      where: { id },
    });

    if (!updated) {
      return res.status(404).json({ message: "Personaje no encontrado" });
    }

    const updatedCharacter = await Character.findByPk(id);
    res.json(updatedCharacter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar Character
export const deleteCharacter = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ error: "El ID debe ser un numero entero" });
  }

  try {
    const deleted = await Character.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ message: "Personaje no encontrado" });
    }

    res.json({ message: "Personaje eliminado" });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

// Funcion para validar el ID
const isValidId = (id) => {
  return !isNaN(Number(id)) && Number.isInteger(Number(id)) && Number(id) > 0;
};
