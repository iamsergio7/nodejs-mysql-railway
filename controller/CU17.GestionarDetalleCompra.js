import { pool } from "../db/db.js";

export const getDetalleCompras = async (req, res) => {
  try {
    const [result] = await pool.query("select * from DETALLECOMPRA ");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getUnidad = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from DETALLECOMPRA where id=?",
      [req.params.id]
    );
    if (result.length === 0) {
      return res
        .estatus(400)
        .json({ message: "No hay ningun detalle de compra  resgistrado" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createDetalleCompra = async (req, res) => {
  try {
    const {
      cantidad,
      precio,
      fecha,
      tipoUnidad,
      idNota,
      idMateria,
      idProveedor,
    } = req.body;
    const [result] = await pool.query(
      "insert into DETALLECOMPRA( cantidad, precio, fecha, tipoUnidad, idNota, idMateria, idProveedor ) values(?,?,?,?,?,?,?)",
      [cantidad, precio, fecha, tipoUnidad, idNota, idMateria, idProveedor]
    );
    res.json({
      id: result.insertId,
      cantidad,
      precio,
      fecha,
      tipoUnidad,
      idNota,
      idMateria,
      idProveedor,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateDetalleCompra = async (req, res) => {
  try {
    const [result] = await pool.query("update DETALLECOMPRA set ? where id=?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteDetalleCompra = async (req, res) => {
  try {
    const [result] = await pool.query("delete  from DETALLECOMPRA where id=?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "No se encuentra ningun detalle de compra" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
