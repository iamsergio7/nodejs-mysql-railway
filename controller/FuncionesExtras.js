import { pool } from "../db/db.js";


/* devuelve el id del producto con el parametro nombre */
export const obtenerIdProducto = async (req, res) => {
    try {
      const [result] = await pool.query("select id from PRODUCTO where nombre=?", [
        req.params.nombre,
      ]);
      if (result.length === 0) {
        return res
          .estatus(400)
          .json({ message: "No hay ningun producto resgistrado con ese nombre" });
      }
      res.json(result[0]);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  /* devuelve el numero del pedido mas reciente */
  export const obtenerIdPedido = async (req, res) => {
    try {
      const [result] = await pool.query("select MAX(id) from PEDIDO where fecha=CURDATE()");
      if (result.length === 0) {
        return res
          .estatus(400)
          .json({ message: "No hay ningun pedido resgistrado hoy" });
      }
      res.json(result[0]);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  /*obtiene el id del cliente con el parametro ci*/
  export const obtenerIdCliente = async (req, res) => {
    try {
      const [result] = await pool.query("select id from CLIENTE where ci=?");
      if (result.length === 0) {
        return res
          .estatus(400)
          .json({ message: "No hay ningun cliente resgistrado con ese ci" });
      }
      res.json(result[0]);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  /*funcion que  multiplica el precio por la cantidad y suma 
actualizar en el total del pedido pasar el id del ultimo pedido arriba la funcion para obtenerlo*/
export const TotalDetalleVenta = async (req, res) => {
    try {
      const [result] = await pool.query("select sum(precio * cantidad) from DETALLEVENTA where  idPedido =?", [
        req.params.id
      ]);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

/* funcion que obtiene el id del cargo con el nombre */
/* devuelve el numero del pedido mas reciente */
export const obtenerIdCargo = async (req, res) => {
  try {
    const [result] = await pool.query("select id from CARGO where nombre=?",[
      req.params.nombre
    ]);
    if (result.length === 0) {
      return res
        .estatus(400)
        .json({ message: "No hay ningun cargo resgistrado " });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
