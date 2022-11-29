import { pool } from "../db/db.js";

export const getMaterias = async (req, res) => {
  try {
    const [result] = await pool.query("select * from MATERIA ");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getMateria = async (req, res) => {
  try {
    const [result] = await pool.query("select * from MATERIA where id=?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res
        .estatus(400)
        .json({ message: "No hay ninguna materia prima resgistrada" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createMateria = async (req, res) => {
  try {
    const { nombre, stock, stockMinimo, fechaVencimiento, idUnidad } = req.body;
    const [result] = await pool.query(
      "insert into MATERIA( nombre, stock, stockMinimo, fechaVencimiento, idUnidad ) values(?,?,?,?,?)",
      [nombre, stock, stockMinimo, fechaVencimiento, idUnidad]
    );
    res.json({
      id: result.insertId,
      nombre,
      stock,
      stockMinimo,
      fechaVencimiento,
      idUnidad,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateMateria = async (req, res) => {
  try {
    const [result] = await pool.query("update MATERIA set ? where id=?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteMateria = async (req, res) => {
  try {
    const [result] = await pool.query("delete  from MATERIA where id=?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "No se encuentra ninguna materia prima" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
