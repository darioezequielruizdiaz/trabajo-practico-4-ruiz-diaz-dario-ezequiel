const characterValidator = (data, isPartial = false) => {
  const errores = [];

  if (!isPartial || "name" in data) {
    if (data.name?.trim() === "") {
      errores.push("El nombre no puede estar vacío");
    }
  }

  if (!isPartial || "ki" in data) {
    if (data.ki === "" || isNaN(Number(data.ki))) {
      errores.push("El Ki debe ser un número");
    }
  }

  if (!isPartial || "race" in data) {
    if (data.race?.trim() === "") {
      errores.push("La raza no puede estar vacía");
    }
  }

  if (!isPartial || "gender" in data) {
    if (data.gender !== "Male" && data.gender !== "Female") {
      errores.push('El género debe ser "Male" o "Female"');
    }
  }

  return errores;
};

export default characterValidator;
