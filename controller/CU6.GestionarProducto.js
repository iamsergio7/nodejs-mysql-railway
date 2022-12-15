import { pool } from "../db/db.js";

export const getProductos = async (req, res) => {
  try {
    const [result] = await pool.query("select * from PRODUCTO ");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getProducto = async (req, res) => {
  try {
    const [result]  = await pool.query("select * from PRODUCTO where id=?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res
        .estatus(400)
        .json({ message: "No hay ningun producto resgistrado" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createProducto = async (req, res) => {
  try {
    const { nombre, precio, cantidad, descripcion } =
    req.body;
  const [result] = await pool.query(
    "insert into PRODUCTO( nombre, precio,cantidad, descripcion,  ) values(?,?,?,?)",
    [ nombre, precio, descripcion, idReceta ]
  );
  res.json({
    id: result.insertId,
    nombre, 
    precio,
    cantidad,
    descripcion 
     
  });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateProducto = async (req, res) => {
  try {
    const [result]  = await pool.query("update PRODUCTO set ? where id=?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteProducto = async (req, res) => {
  try {
    const [result]  = await pool.query("delete  from PRODUCTO where id=?", [
      req.params.id,
    ]);
    if(result.affectedRows===0)
    {
      return res.status(404).json({message:'No se encuentra ningun producto'})
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
