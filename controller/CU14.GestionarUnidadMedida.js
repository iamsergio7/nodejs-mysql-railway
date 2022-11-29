import { pool } from "../db/db.js";

export const getUnidades = async (req, res) => {
  try {
    const [result] = await pool.query("select * from UNIDADMEDIDA ");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getUnidad = async (req, res) => {
  try {
    const [result] = await pool.query("select * from UNIDADMEDIDA where id=?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res
        .estatus(400)
        .json({ message: "No hay ninguna unidad  resgistrada" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createUnidad = async (req, res) => {
  try {
    const { nombre, abreviatura } = req.body;
    const [result] = await pool.query(
      "insert into UNIDADMEDIDA( nombre, abreviatura ) values(?,?)",
      [nombre, abreviatura]
    );
    res.json({
      id: result.insertId,
      nombre,
      abreviatura
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateUnidad = async (req, res) => {
  try {
    const [result] = await pool.query("update UNIDADMEDIDA set ? where id=?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteUnidad = async (req, res) => {
  try {
    const [result] = await pool.query("delete  from UNIDADMEDIDA where id=?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "No se encuentra ninguna unidad" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
