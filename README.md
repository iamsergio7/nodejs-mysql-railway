# ProyectoSi1

Comandos nesesarios para ejecutar este backend en el localhost

## Creacion y despliegue de la Base de Datos utilizando un contenedor Docker

### Crear la BD y el contenedor

Tener Docker ejecutando y tener la imagen de mysql en docker previamente...

en el CMD o cualquier consola de comando ejecutar el sig comando:

       docker run --name mysqlpanaderia -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=panaderia -p 3306:3306 -d mysql

Con esto ya creamos el contenedor y la base de datos que utilizaremos en el proyecto

### Comandos para ingresar a la consola de comandos de mysql

Para ingresar a la consola de comandos del contenedor:

       docker exec -it mysqlpanaderia bash


Para ingresar a la consola de mysql:

       mysql -u root -p

e ingresar la contraseña : password

Y ya... estas en la consola de mysql...
