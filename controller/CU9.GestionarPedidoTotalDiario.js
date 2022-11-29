import { pool } from "../db/db.js";
/*Funcion que devuelve el total de los pedidos del dia*/ 

export const TotalDetalle = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select sum(total) from PEDIDO where fecha= CURDATE()"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
