import { Router } from "express";
import {
  getEmpleados,
  getEmpleado,
  createEmpleado,
  updateEmpleado,
  deleteEmpleado,
} from "../controller/CU20.GestionarEmpleados.js";
import {
  getUsuarios,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from "../controller/CU3.GestionarUsuarios.js";
import {
  getCargos,
  getCargo,
  createCargo,
  updateCargo,
  deleteCargo,
} from "../controller/Cargo.js";
import {
  getClientes,
  getCliente,
  updateCliente,
  deleteCliente,
  createCliente,
} from "../controller/CU5.GestionarClientes.js";
import {
  getProductos,
  getProducto,
  createProducto,
  updateProducto,
  deleteProducto,
} from "../controller/CU6.GestionarProducto.js";

import {
  getRoles,
  getRol,
  createRol,
  updateRol,
  deleteRol,
} from "../controller/CU4.GestionarRoles.js";

import {
  getPedidos,
  getPedido,
  createPedido,
  updatePedido,
  deletePedido,
} from "../controller/CU7.GestionarPedido.js";

import {
  obtenerIdPedido,
  obtenerIdProducto,
} from "../controller/FuncionesExtras.js";


import{
  // login,
  // register,
  storeUser
  // auth
}from "../controller/CU1.IniciarSesion.js";

// import{
//   logout
// }from "../controller/CU2.CerrarSesion.js";


const router = Router();


/*---------login-registro----- */
// router.get("/login", login);
// router.post("/login", auth);
// router.get("/register", register);
router.post("/register", storeUser);

// /*--------cerrar sesion--------*/
// router.get("/logout", logout);



/*---------Empleados-----------*/
router.get("/empleado", getEmpleados);

router.get("/empleado/:id", getEmpleado);

router.post("/empleado", createEmpleado);

router.put("/empleado/:id", updateEmpleado);

router.delete("/empleado/:id", deleteEmpleado);

/*-----------Usuarios-------------*/
router.get("/usuario", getUsuarios);
router.get("/usuario/:id", getUsuario);
router.post("/usuario", createUsuario);
router.put("/usuario/:id", updateUsuario);
router.delete("/usuario/:id", deleteUsuario);

/*-----------Cargos-------------*/
router.get("/cargo", getCargos);
router.get("/cargo/:id", getCargo);
router.post("/cargo", createCargo);
router.put("/cargo/:id", updateCargo);
router.delete("/cargo/:id", deleteCargo);

/*---------CLIENTE-----------------*/
router.get("/cliente", getClientes);
router.get("/cliente/:id", getCliente);
router.post("/cliente", createCliente);
router.put("/cliente/:id", updateCliente);
router.delete("/cliente/:id", deleteCliente);

/*----------Producto-----------*/
router.get("/producto", getProductos);
router.get("/producto/:id", getProducto);
router.post("/producto", createProducto);
router.put("/producto/:id", updateProducto);
router.delete("/producto/:id", deleteProducto);

/*------------Rol---------------*/
router.get("/rol", getRoles);
router.get("/rol/:id", getRol);
router.post("/rol", createRol);
router.put("/rol/:id", updateRol);
router.delete("/rol/:id", deleteRol);

/*--------Pedido---------------*/
router.get("/pedido", getPedidos);
router.get("/pedido/:id", getPedido);
router.post("/pedido", createPedido);
router.put("/pedido/:id", updatePedido);
router.delete("/v/:id", deletePedido);

/*-------pedido total-------*/
router.get("/total", obtenerIdPedido);

export default router;
