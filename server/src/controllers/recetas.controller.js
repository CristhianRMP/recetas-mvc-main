import { Receta } from "../models/Recetas.js";

export const getRecetas = async (req, res) => {
  console.log("ingreso a getREcetas");
  try {
    const recetas = await Receta.findAll();
    res.json({
      status: true,
      message: "Recetas obtenidas correctamente",
      body: recetas,
    });

    console.log(recetas);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getRecetaById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Id a editar", id);
    const receta = await Receta.findOne({
      where: {
        id_receta: id,
      },
    });

    console.log("receta id", receta);

    if (!receta)
      return res.status(400).json({ message: "Receta no encontrada" });

    res.json({
      status: true,
      message: "Receta encontrada",
      body: receta,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createReceta = async (req, res) => {
  console.log("ingreso a createReceta");
  console.log(req);
  try {
    // const {
    //   str_nombre,
    //   str_image,
    //   str_preparacion,
    //   str_dificultad,
    //   usuarioId,
    // } = req.body;

    const {
      str_nombre,
      str_image,
      str_preparacion,
      str_dificultad,
      usuarioId,
    } = req.body;
    const receta = await Receta.create({
      str_nombre,
      str_image,
      str_preparacion,
      str_dificultad,
      usuarioId,
    });
    res.json({
      status: true,
      message: "Receta creada correctamente",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteReceta = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteRowReceta = await Receta.destroy({
      where: {
        id_receta: id,
      },
    });
    console.log("La receta", deleteRowReceta, "se elimino con exito");
    return res.sendStatus(204); //significa ok
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateReceta = async (req, res) => {
  const { id } = req.params;
  //onsole.log(req);
  console.log("id", id);
  //console.log(req.body);
  const {
    id_receta,
    str_receta_nombre,
    str_autor_nombre,
    str_autor_telefono,
    str_autor_correo,
    str_receta_image,
    str_receta_preparacion,
    str_receta_dificultad,
  } = req.body;

  console.log(req.body);

  try {
    const receta = await Receta.update(
      {
        str_receta_nombre,
        str_autor_nombre,
        str_autor_telefono,
        str_autor_correo,
        str_receta_image,
        str_receta_preparacion,
        str_receta_dificultad,
      },
      {
        where: { id_receta: id },
      }
    );

    /*const updateRecets = await Receta.findOne({
      where: {
        id_receta: id,
      },
    });
    console.log("updateRecets", updateRecets);
    updateRecets.set(req.body);
    await updateRecets.save();*/

    //return res.json(updateRecets);
    console.log("Receta actualizada", receta);
    res.json({
      status: true,
      message: "Receta actualizada correctamente",
      //body: receta,
    });
  } catch (err) {
    console.log("error", err);
    return res.status(500).json({ message: err.message });
  }
};
