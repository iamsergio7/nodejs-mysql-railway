import { pool } from "../db/db.js";

export const getProveedors = async (req, res) => {
  try {
    const [result] = await pool.query("select * from PROVEEDOR ");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getProveedor = async (req, res) => {
  try {
    const [result] = await pool.query("select * from PROVEEDOR where id=?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res
        .estatus(400)
        .json({ message: "No hay ningun proveedor resgistrado" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createProveedor = async (req, res) => {
  try {
    const { nombre, apellido, telefono, direccion } = req.body;
    const [result] = await pool.query(
      "insert into PROVEEDOR( nombre, apellido, telefono, direccion ) values(?,?,?,?)",
      [nombre, apellido, ci, telefono, direccion, fechaNacimiento]
    );
    res.json({
      id: result.insertId,
      nombre,
      apellido,
      telefono,
      direccion,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateProveedor = async (req, res) => {
  try {
    const [result] = await pool.query("update PROVEEDOR set ? where id=?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteProveedor = async (req, res) => {
  try {
    const [result] = await pool.query("delete  from PROVEEDOR where id=?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "No se encuentra ningun proveedor" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
