import { pool } from "../db/db.js";

export const getPedidos = async (req, res) => {
  try {
    const [result] = await pool.query("select * from PEDIDO ");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getPedido = async (req, res) => {
  try {
    const [result] = await pool.query("select * from PEDIDO where id=?", [
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
export const createPedido = async (req, res) => {
  try {
    const { detalle, idEmpleado, idCliente } =
      req.body;
    const [result] = await pool.query(
      "insert into PEDIDO( detalle, fecha, fechaEntrega, total, idEmpleado, idCliente ) values(?,CURDATE(),CURDATE(),0,?,?)",
      [detalle, idEmpleado, idCliente]
    );
    res.json({
      id: result.insertId,
      detalle,
      idEmpleado,
      idCliente,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updatePedido = async (req, res) => {
  try {
    const [result] = await pool.query("update PEDIDO set ? where id=?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deletePedido = async (req, res) => {
  try {
    const [result] = await pool.query("delete  from PEDIDO where id=?", [
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
