// import { pool } from "../db/db.js";
// import bcrypt from 'bcrypt'


// export const login = async (req, res) => {
// 	if (req.session.loggedin != true) {
// 		// res.render('login/index');         //aqui vala ruta del html, la vista
// 		res.json({ message: "Redireccionando a: /login" });
// 	} else {
// 		// res.redirect('/');
// 		res.json({ message: "Redireccionando a: /" });
// 	}
// };

// export const auth = async (req, res) => {  //verifica la contrase;a e inicia sesion
// 	try {
// 		const data = req.body;
// 		const [result] = await pool.query('SELECT * FROM USUARIO WHERE  login = ?', [data.login]);


// 		if (result.length > 0) { //el usuario si existe
// 			result.forEach( element => {
				
// 				// const password = data.Password;
// 				 bcrypt.compare(data.Password, element.Password, (err, isMatch) => {
// 					if (!isMatch) {
// 						// res.render('login/index', {error: 'Error: contase;a incorrecta'});
// 						// res.json({ message: "Contraseña Incorrecta, redireccionando a: /login" });
//                         console.log("Contraseña Incorrecta, redireccionando a: /login");
// 					} else {
// 						req.session.loggedin = true;   //sesion logueada
// 						req.session.name = element.name;
// 						// res.redirect('/');      // ("/")  <-- es la ruta raiz o el home
// 						// res.json({ message: "Login correcto, redireccionando a: /" });
//                         console.log("Login correcto, redireccionando a: /");
// 					}
// 				});
// 			});
// 		} else { //el usuario no existe
// 			// res.render('login/index', { error: 'Error: el usuario no existe' })
// 			res.json({ message: "Usuario no existe, redireccionando a: /login/index" });
// 		}
// 		res.json({
// 			login
// 		});
// 	} catch (error) {
// 		return res.status(500).json({ message: error.message });
// 	}
// }

// export const register = async (req, res) => {
// 	if (res.session.loggedin != true) {
// 		// res.render('login/register');         //aqui vala ruta del html, la vista
// 		res.json({ message: "Redireccionando a: login/register" });
// 	} else {
// 		// res.redirect('/');
// 		res.json({ message: "Redireccionando a: /" });
// 	}
// };


export const storeUser = async (req, res) => {

	try {
		const data = req.body;
		const [result] = await pool.query('SELECT * FROM USUARIO WHERE login = ?', [data.login]);

		if (result.length > 0) {
			// return res.status(400).json({ message: "El usuario ya existe" });
			// res.render('login/register', { error: 'Error: el usuario ya existe' });  //(login/register)-->ahi va la ubicacion de la pagina del formulario(vistas el html)
			// res.json({ message: "El usuario ya existe, redireccionando a: /login/register" });
			console.log("El usuario ya existe, redireccionando a: /login/register");
		} else {
			const password = data.Password;
			const encryptedPassword = await bcrypt.hash(password, 12)
			let users = {
				"login": req.body.login,
				"Password": encryptedPassword,
				"idEmpleado": req.body.idEmpleado,
				"idRol": req.body.idRol
			}


			const [result] = await pool.query(
                "insert into USUARIO(login, Password, idEmpleado, idRol ) values(?,?,?,?)",
                [ users.login, users.Password, users.idEmpleado, users.idRol]  
            );
			res.json({
				id: result.insertId,
				login: users.login, 
				Password:users.Password, 
				idEmpleado: users.idEmpleado, 
				idRol:users.idRol
			});
			req.session.loggedin = true;   //sesion logueada
			req.session.name = data.name;
			// res.json({ message: "Sesion iniciada con exito" });
			console.log("Sesion iniciada con exito");
		}
		
	} catch (error) {
		console.log(error);
	}
};
