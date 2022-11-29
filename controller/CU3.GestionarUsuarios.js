import { pool } from "../db/db.js";


export const getUsuarios = async (req, res) => {
  try {
    const [result] = await pool.query("select * from USUARIO ");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getUsuario = async (req, res) => {
  try {
    const [result] = await pool.query("select * from USUARIO where id=?", [
      req.params.id
    ]);
    if (result.length === 0) {
      return res
        .status(400)
        .json({ message: "No hay ningun usuario resgistrado" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createUsuario = async (req, res) => {
  try {
    const { login, password, idEmpleado, idRol  } =
    req.body;
  const [result] = await pool.query(
    "insert into USUARIO(login, password, idEmpleado, idRol ) values(?,?,?,?)",
    [ login, password, idEmpleado, idRol]
  );
  res.json({
    id: result.insertId,
    login, 
    password,
    idEmpleado,
    idRol
   
  });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateUsuario = async (req, res) => {
  try {
    const [result] = await pool.query("update USUARIO set ? where id=?", [
      req.body,
      req.params.id
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteUsuario = async (req, res) => {
  try {
    const [result] = await pool.query("delete from USUARIO where id=?", [
      req.params.id,
    ]);
    if(result.affectedRows === 0)
    {
      return res.status(404).json({message:'No se encuentra ningun usuario'})
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }1
};
