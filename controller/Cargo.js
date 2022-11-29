import { pool } from "../db/db.js";

export const getCargos = async (req, res) => {
  try {
    const [result] = await pool.query("select * from CARGO ");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getCargo = async (req, res) => {
  try {
    const [result]= await pool.query("select * from CARGO where id=?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res
        .status(400)
        .json({ message: "No hay ningun cargo resgistrado" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createCargo = async (req, res) => {
  try {
    const { nombre, sueldo } =
    req.body;
  const [result] = await pool.query(
    "insert into CARGO(nombre, sueldo) values(?,?)",
    [nombre, sueldo]
  );
  res.json({
    id: result.insertId,
    nombre,
    sueldo
  });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateCargo = async (req, res) => {
  try {
    const [result] = await pool.query("update CARGO set ? where id=?", [
      req.body,
      req.params.id
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteCargo = async (req, res) => {
  try {
    const [result] = await pool.query("delete  from CARGO where id=?", [
      req.params.id,
    ]);
    if(result.affectedRows===0)
    {
      return res.status(404).json({message:'No se encuentra ningun cargo'})
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
