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
 getDetPedido,
 getDetPedidos,
 createDetPedido,
 updateDetPedido,
 deleteDetPedido,
}from "../controller/CU8.GestionarDetalleVenta.js";
import{
 TotalDetalle,
 TotalPorProducto,
 obtenerCantidadProductos,
}from "../controller/CU9.GestionarPedidoTotalDiario.js"
import{
 getEntrega,
 getEntregas,
 updateEntrega,
 createEntrega,
 deleteEntrega,
}from "../controller/CU10.GestionarNotaEntrega.js"
import{
getProveedor,
getProveedors,
createProveedor,
deleteProveedor,
updateProveedor,
}from "../controller/CU11.GestionarProveedor.js"
import{
getMateria,
getMaterias,
createMateria,
deleteMateria,
updateMateria,
}from "../controller/CU12.GestionarMateriaPrima.js"
import{
getUnidad,
getUnidades,
createUnidad,
updateUnidad,
deleteUnidad,
}from"../controller/CU14.GestionarUnidadMedida.js"
import{
getCompra,
getCompras,
deleteCompra,
updateCompra,
createCompra,
}from"../controller/CU16.GestionarNotaCompra.js"
import{
getDetalleCompras,
getDetalleCompra,
deleteDetalleCompra,
updateDetalleCompra,
createDetalleCompra,
}from"../controller/CU17.GestionarDetalleCompra.js"



// import{
//   // login,
//   register,
//   storeUser
//   // auth
// }from "../controller/CU1.IniciarSesion.js";

// import{
//   logout
// }from "../controller/CU2.CerrarSesion.js";


 const router = Router();


// /*---------login-registro----- */
// router.get("/login", login);
// router.post("/login", auth);
// router.get("/register", register);
// router.post("/register", storeUser);

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
router.delete("/pedido/:id", deletePedido);

/*-------pedido total-------*/
router.get("/totalDiario", obtenerIdPedido);
router.get("/totalDiario", TotalPorProducto);
router.get("/totalDiario", TotalDetalle);
router.get("/totalDiario", obtenerCantidadProductos);

/*--------Detalle de pedido----- */
router.get("/DetallePedido", getDetPedidos);
router.get("/DetallePedido/:id", getDetPedido);
router.post("/DetallePedido", createDetPedido);
router.put("/DetallePedido/:id", updateDetPedido);
router.delete("/DetallePedido/:id", deleteDetPedido);

/*----------Nota Entrega--------------- */
router.get("/notaEntrega", getEntregas);
router.get("/notaEntrega/:id", getEntrega);
router.post("/notaEntrega", createEntrega);
router.put("/notaEntrega/:id", updateEntrega);
router.delete("/notaEntrega/:id", deleteEntrega);

/*-------------Proveedor------------ */
router.get("/proveedor", getProveedors);
router.get("/proveedor/:id", getProveedor);
router.post("/proveedor", createProveedor);
router.put("/proveedor/:id", updateProveedor);
router.delete("/proveedor/:id", deleteProveedor);

/*---------Materia-------*/
router.get("/materia", getMaterias);
router.get("/materia/:id", getMateria);
router.post("/materia", createMateria);
router.put("/materia/:id", updateMateria);
router.delete("/materia/:id", deleteMateria);

/*------------unidad ------- */
router.get("/unidad", getUnidades);
router.get("/unidad/:id", getUnidad);
router.post("/unidad", createUnidad);
router.put("/unidad/:id", updateUnidad);
router.delete("/unidad/:id", deleteUnidad);

/*-------------compra-------------- */
router.get("/compra", getCompras);
router.get("/compra/:id", getCompra);
router.post("/compra", createCompra);
router.put("/compra/:id", updateCompra);
router.delete("/compra/:id", deleteCompra);

/*---------detalle compra--------- */
router.get("/detCompra", getDetalleCompras);
router.get("/detCompra/:id", getDetalleCompra);
router.post("/detCompra", createDetalleCompra);
router.put("/detCompra/:id",updateDetalleCompra);
router.delete("/detCompra/:id", deleteDetalleCompra);



export default router;
