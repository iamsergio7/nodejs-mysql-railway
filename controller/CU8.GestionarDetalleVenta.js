import { pool } from "../db/db.js";

export const getDetPedidos = async (req, res) => {
  try {
    const [result] = await pool.query("select * from DETALLEVENTA ");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getDetPedido = async (req, res) => {
  try {
    const [result] = await pool.query("select * from DETALLEVENTA where id=?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res
        .estatus(400)
        .json({ message: "No hay ningun pedido resgistrado" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createDetPedido = async (req, res) => {
  try {
    const {  idPedido, idProducto, cantidad, precio } =
      req.body;
    const [result] = await pool.query(
      "insert into DETALLEVENTA( idPedido, idProducto, cantidad, precio ) values(?,?,?,?)",
      [idPedido, idProducto, cantidad, precio]
    );
    res.json({
      id: result.insertId,
      idPedido, 
      idProducto, 
      cantidad, 
      precio
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateDetPedido = async (req, res) => {
  try {
    const [result] = await pool.query("update DETALLEVENTA set ? where id=?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteDetPedido = async (req, res) => {
  try {
    const [result] = await pool.query("delete  from DETALLEVENTA where id=?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "No se encuentra ningun pedido" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
