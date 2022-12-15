CREATE TABLE CLIENTE 
(
 id INT NOT NULL auto_increment , 
 nombre VARCHAR (50) NOT NULL, 
 apellido VARCHAR (50) NOT NULL, 
 ci INT NOT NULL,
 telefono int not null,
 direccion VARCHAR (20) NOT NULL, 
 fechaNacimiento date,
 primary key (id)
);

create table ROL
(
id int not null auto_increment,
nombre VARCHAR (50) NOT NULL,
descripcion varchar(120) not null,
primary key(id)
);


create table CARGO 
( 
  id int not null auto_increment , 
  nombre varchar (120) not null, 
  sueldo float not null, 
  primary key (id) 
);

create table EMPLEADO
(
  id int not null auto_increment , 
  nombre varchar(40) not null, 
  apellido varchar(40) not null, 
  ci int not null, 
  direccion varchar(120) not null, 
  sexo varchar(1) not null,
  fechaNacimiento date,
  idCargo int not null,  
  primary key (id),
  foreign key (idCargo) references CARGO ( id)
   ON UPDATE CASCADE
   ON DELETE CASCADE 
  
);

create table USUARIO
(
 id int not null auto_increment , 
 login varchar(40) not null, 
 Password varchar(100) not null, 
 idEmpleado int not null, 
 idRol int not null,
 primary key (id),
 foreign key (idEmpleado) references EMPLEADO ( id)
   ON UPDATE CASCADE
   ON DELETE CASCADE,
  foreign key (idRol) references ROL ( id)
   ON UPDATE CASCADE
   ON DELETE CASCADE
);

create table PEDIDO
( 
 id int not null auto_increment , 
 detalle varchar(300) not null, 
 fecha date not null,
 fechaEntrega date not null, 
 total float not null,
 idEmpleado int not null, 
 idCliente int not null,
 primary key (id),
  foreign key (idEmpleado) references EMPLEADO ( id)
   ON UPDATE CASCADE
   ON DELETE CASCADE,
    foreign key (idCliente) references CLIENTE ( id)
   ON UPDATE CASCADE
   ON DELETE CASCADE 
);

create table NOTAENTREGA(
 id int not null auto_increment,
 fecha date not null,
 idEmpleado int not null,
 primary key (id),
 foreign key  ( idEmpleado ) references EMPLEADO (id) 
 on update cascade 
  on delete cascade
);

create table PRODUCTO
( 
 id int not null auto_increment , 
 nombre varchar(50) not null, 
 precio float not null,
 cantidad int not null, 
 descripcion varchar(300) not null, 
 primary key(id)
);

create table DETALLEVENTA
(
 idPedido int not null, 
 idProducto int not null, 
 cantidad int not null, 
 precioVenta float not null, 
 primary key ( idPedido , idProducto) , 
 foreign key  ( idPedido) references PEDIDO(id) 
 on update cascade 
  on delete cascade, 
  foreign key (idProducto) references PRODUCTO ( id) 
  on update cascade 
  on delete cascade
);

create table UNIDADMEDIDA
(
id int not null auto_increment,
abreviatura char(5) not null,
nombre varchar(50)not null,
primary key (id)

);

create table MATERIA
(
 id int not null auto_increment, 
 nombre varchar(120) not null, 
 stock float not null, 
 stockMinimo float not null,
 fechaVencimiento date not null,
 idUnidad int not null,
 primary key (id),
 foreign key  ( idUnidad ) references UNIDADMEDIDA (id) 
 on update cascade 
  on delete cascade

);

create table PROVEEDOR 
(
 id int not null auto_increment , 
 nombre VARCHAR (50) NOT NULL, 
 apellido VARCHAR(50) NOT NULL,
 direccion VARCHAR (20) NOT NULL, 
 telefono int not null,
 primary key (id)
);
create table NOTACOMPRA
(
 id int not null auto_increment, 
 fecha date not null, 
 total float not null,
 idEmpleado int not null,
 primary key (id),
 foreign key  ( idEmpleado ) references EMPLEADO (id) 
 on update cascade 
  on delete cascade
);
create table DETALLECOMPRA
(
 id int not null auto_increment,
 cantidad int not null, 
 precio float not null, 
 fecha date not null,
 tipoUnidad int not null,
 idNota int not null, 
 idMateria int not null, 
 idProveedor int not null,
 primary key ( id) , 
 foreign key  ( idNota ) references NOTACOMPRA (id) 
 on update cascade 
  on delete cascade, 
  foreign key (idMateria) references MATERIA ( id ) 
  on update cascade 
  on delete cascade,
  foreign key (idProveedor) references PROVEEDOR ( id ) 
  on update cascade 
  on delete cascade,
  foreign key (tipoUnidad) references UNIDADMEDIDA ( id ) 
  on update cascade 
  on delete cascade
);


/*-----Poblado de tablas-----*/
insert into ROL(id, nombre, descripcion)values
(1,'Admi','Puede ingresara todo y hacer todo'),
(2,'Usuario','Puede ingresar a todo y ver todo pero no agregar, editar ni eliminar nada'),
(3,'Secretaria','Puede ingresar a datos en todos los modulos y editarlos pero no asi eliminarlos'),
(4,'Encargado de ventas','Permiso a todos las operaciones del modulo de ventas'),
(5,'Encargado de almacen','Permiso a todos las operaciones del modulo de almacen'),
(6,'Encargado de produccion','Permiso a todos las operaciones del modulo de produccion'),
(7,'Maestro de produccion','Permiso a todos las operaciones del modulo de produccion');
select * from ROL;

insert into CLIENTE (nombre,apellido,direccion,ci,telefono, fechaNacimiento) values
('Juan','Terceros','Plan 3000','111',3856978,'1997/09/12'),
('Alex','Claros','Los pocitos','222',3856979,'1999/01/22'),
('Alejandro','Perez','Guapuru','333',3856981,'1980/06/02'),
('Pedro','Mamani','La primavera','444',3856982,'1978/05/09'),
('Maria','Flores','La villa','555',3856983,'1990/03/19');
select * from CLIENTE;

insert into CARGO(nombre,sueldo)values
('Secretaria',2100),
('Supervisor de Inventario',2500),
('Maestro de panaderia',2500),
('Ayudante',1800);
select* from CARGO;

insert into EMPLEADO(nombre,apellido,ci,direccion,sexo, fechaNacimiento, idCargo) values
('Sara','Menacho',888,'1er anillo /Avenida brasil','F','1997/09/12',1),
('Angel','Carrasco',889,'Barrio las palmas','M','1999/01/22',2),
('Genaro','Martines',891,'km 13','M','1980/06/02',3),
('Fernando','Perez',890,'Plan 300','M','1978/05/09',4);
select * from EMPLEADO;

insert into USUARIO(login,password, idRol,idEmpleado)values
('Sarita',123456,1,1),
('Angel',1234567,2,2),
('Fernando',1234567,3,3),
('Genaro',1234567,4,4);
select * from USUARIO;

insert into PRODUCTO(nombre,precio,cantidad,descripcion) values
('pan frances',0.5,1,'rico pan frances'),
('pan con queso',1,1,'pan con mucho queso'),
('pan mollete',3,1,'dulce');
select * from PRODUCTO;

insert into PEDIDO(detalle,fecha,fechaEntrega,total,idEmpleado,idCliente) values
('sin detalle','2022/9/23','2022/9/24',50,1,1),
('con mas queso','2022/9/21','2022/9/22',80,1,2),
('sin detalle','2022/9/18','2022/9/20',60,1,3),
('sin detalle','2022/9/23','2022/9/24',100,1,3);
select * from PEDIDO;

insert into DETALLEVENTA(idPedido,idProducto,cantidad,precioVenta) values
(1,1,100,0.5),
(2,2,80,1),
(3,3,20,3),
(4,3,20,3),
(4,2,40,1);
select * from DETALLEVENTA;

insert into PROVEEDOR(nombre,apellido,direccion,telefono) values
('Jose ','Claros','Santos dumont',3587459),
('Abelardo','Choque','km 13',3587460),
('Roberto','Mamani','La guardia',3587461),
('Dayana','Maldonado','Grigotá',3587462),
('Margarita','Alcazar','3er anillo',3587463);
select * from PROVEEDOR ;

insert into UNIDADMEDIDA(nombre , abreviatura) values
('Kilogramos','Kg'),
('Gramos','gr'),
('Litro','L'),
('Libras','Lb'),
('Unidad','U');
select * from UNIDADMEDIDA;

insert into MATERIA(nombre, stock, stockMinimo, fechaVencimiento, idUnidad) values
('Harina',50,10,'2022/12/12',1),
('Huevo',46,10,'2022/12/12',5),
('Mantequilla',19,5,'2022/12/25',1),
('Levadura',3,1,'2023/01/01',1),
('Azucar',40,10,'2023/01/05',1),
('Queso',15,2,'2022/12/12',1),
('Leche',59,10,'2022/09/30',3);
select * from MATERIA;

