import { pool } from "../db/db.js";

export const getRoles = async (req, res) => {
  try {
    const [result] = await pool.query("select * from ROL ");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getRol = async (req, res) => {
  try {
    const [result] = await pool.query("select * from ROL where id=?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(400).json({ message: "No hay ningun rol resgistrado" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createRol = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const [result] = await pool.query(
      "insert into ROL(nombre ,descripcion ) values(?,?)",
      [nombre, descripcion]
    );
    res.json({
      id: result.insertId,
      nombre,
      descripcion,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateRol = async (req, res) => {
  try {
    const [result] = await pool.query("update ROL set ? where id=?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteRol = async (req, res) => {
  try {
    const [result] = await pool.query("delete from ROL where id=?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "No se encuentra ningun rol" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  1;
};

// Path: ProyectoSi1\controller\CU4.GestionarRoles.js
// Compare this snippet from ProyectoSi1\config.js:
// export const PORT=3000
