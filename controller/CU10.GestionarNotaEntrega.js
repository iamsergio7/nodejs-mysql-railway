import { pool } from "../db/db.js";

export const getEntregas = async (req, res) => {
  try {
    const [result] = await pool.query("select * from NOTAENTREGA ");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getEntrega = async (req, res) => {
  try {
    const [result]  = await pool.query("select * from NOTAENTREGA where id=?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res
        .estatus(400)
        .json({ message: "No hay ninguna entrega resgistrada" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// FORMATO DE LA FECHA AAAA/MM/DD
export const createEntrega = async (req, res) => {
  try {
    const { fecha, idEmpleado} =
    req.body;
  const [result] = await pool.query(
    "insert into NOTAENTREGA( fecha, idEmpleado ) values(?,?)",
    [fecha, idEmpleado]
  );
  res.json({
    id: result.insertId,
    fecha,
    idEmpleado
    
  });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateEntrega = async (req, res) => {
  try {
    const [result]  = await pool.query("update NOTAENTREGA set ? where id=?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteEntrega = async (req, res) => {
  try {
    const [result]  = await pool.query("delete  from NOTAENTREGA where id=?", [
      req.params.id,
    ]);
    if(result.affectedRows===0)
    {
      return res.status(404).json({message:'No se encuentra ninguna entrega'})
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
