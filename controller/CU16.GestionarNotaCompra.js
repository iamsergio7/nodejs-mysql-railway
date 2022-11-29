import { pool } from "../db/db.js";

export const getCompras = async (req, res) => {
  try {
    const [result] = await pool.query("select * from NOTACOMPRA ");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getCompra = async (req, res) => {
  try {
    const [result]  = await pool.query("select * from NOTACOMPRA where id=?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res
        .estatus(400)
        .json({ message: "No hay ninguna compra resgistrada" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// FORMATO DE LA FECHA AAAA/MM/DD
export const createCompra = async (req, res) => {
  try {
    const { fecha, total, idEmpleado} =
    req.body;
  const [result] = await pool.query(
    "insert into NOTACOMPRA( fecha, total, idEmpleado ) values(?,?,?)",
    [fecha, total, idEmpleado]
  );
  res.json({
    id: result.insertId,
    fecha,
    total,
    idEmpleado
    
  });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateCompra = async (req, res) => {
  try {
    const [result]  = await pool.query("update NOTACOMPRA set ? where id=?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteCompra = async (req, res) => {
  try {
    const [result]  = await pool.query("delete  from NOTACOMPRA where id=?", [
      req.params.id,
    ]);
    if(result.affectedRows===0)
    {
      return res.status(404).json({message:'No se encuentra ninguna compra'})
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
