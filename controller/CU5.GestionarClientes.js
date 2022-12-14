import { pool } from "../db/db.js";

export const getClientes = async (req, res) => {
  try {
    const [result] = await pool.query("select * from CLIENTE ");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getCliente = async (req, res) => {
  try {
    const [result]  = await pool.query("select * from CLIENTE where id=?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res
        .estatus(400)
        .json({ message: "No hay ningun cliente resgistrado" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createCliente = async (req, res) => {
  try {
    const { nombre, apellido, ci,telefono, direccion, fechaNacimiento} =
    req.body;
  const [result] = await pool.query(
    "insert into CLIENTE( nombre, apellido, ci, telefono, direccion ) values(?,?,?,?,?)",
    [ nombre, apellido, ci, telefono, direccion, fechaNacimiento]
  );
  res.json({
    id: result.insertId,
    nombre,
    apellido,
    ci,
    telefono,
    direccion,
    fechaNacimiento,
     
  });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateCliente = async (req, res) => {
  try {
    const [result]  = await pool.query("update CLIENTE set ? where id=?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteCliente = async (req, res) => {
  try {
    const [result]  = await pool.query("delete  from CLIENTE where id=?", [
      req.params.id,
    ]);
    if(result.affectedRows===0)
    {
      return res.status(404).json({message:'No se encuentra ningun cliente'})
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};