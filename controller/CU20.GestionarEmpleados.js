import { pool } from "../db/db.js";

export const getEmpleados = async (req, res) => {
  try {
    const [result] = await pool.query("select * from EMPLEADO ");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getEmpleado = async (req, res) => {
  try {
    const [result]  = await pool.query("select * from EMPLEADO where id=?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res
        .estatus(400)
        .json({ message: "No hay ningun empleado resgistrado" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createEmpleado = async (req, res) => {
  try {
    const { nombre, apellido, ci, direccion, sexo ,fechaNacimiento, idCargo } =
    req.body;
  const [result] = await pool.query(
    "insert into EMPLEADO( nombre, apellido, ci, direccion, sexo ,fechaNacimiento, idCargo ) values(?,?,?,?,?,?,?)",
    [ nombre, apellido, ci, direccion, sexo ,fechaNacimiento, idCargo ]
  );
  res.json({
    id: result.insertId,
    nombre,
    apellido,
    ci,
    direccion,
    sexo,
    fechaNacimiento,
    idCargo,  
  });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateEmpleado = async (req, res) => {
  try {
    const [result]  = await pool.query("update EMPLEADO set ? where id=?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteEmpleado = async (req, res) => {
  try {
    const [result]  = await pool.query("delete  from EMPLEADO where id=?", [
      req.params.id,
    ]);
    if(result.affectedRows===0)
    {
      return res.status(404).json({message:'No se encuentra ningun empleado'})
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
