import { pool } from "../db/db.js";
//const bcrypt = require('bcrypt')
import bcrypt from 'bcrypt'


/*function  login(req, res){
	res.render('')
} */
/*function  register(req, res){
	res.render('')
} */
export const login = async (req, res) => {
	if (res.session.loggedin !=true){
		res.render('login/indes');         //aqui vala ruta del html, la vista
	}else{
		res.redirect('/');
	}
  };

  export const  auth = async (req, res) => {  //verifica la contrase;a y inicia sesion
	const data = req.body;
	
	req.getConection((err, conn) => {
		conn.query('SELECT * FROM LOGIREGISTRO WHERE  email = ?', [data.email], (err, userdata) => {
			if (userdata.length > 0){ //el usuario si existe
				userdata.forEach(element => {
					bcrypt.compare(data.password, element.password, (err, isMatch) => {
						if (!isMatch){
							res.render('login/index', {error: 'Error: contase;a incorrecta'});
						}else{
							req.session.loggedin = true;   //sesion logueada
							req.session.name = element.name;

							res.redirect('/');      // ("/")  <-- es la ruta raiz o el home
						}
					});
				});
			}else{ //el usuario no existe
				res.render('login/index',{error: 'Error: el usuario no existe'})
			}
		})
	})
  }

export const register = async (req, res) => {
	if (res.session.loggedin !=true){
		res.render('login/register');         //aqui va la ruta del html, la vista
	}else{
		res.redirect('/');
	}
  };

  export const storeUser = async (req, res) => { //compara si el usuario ya existe en la BD en caso de no estarlo lo crea
	try {
		const { login, password  } =
				req.body;
		const [result] = await pool.query("select * from USUARIO where login=?", [
		  login
		]);
		if (result.length === 0) {
			try {
				const { login, password  } =
				req.body;
				//bcrypt.hash(password, 12).then(hash =>{
					 const [result2] =  await pool.query(
						"insert into USUARIO(login, password ) values(?,?)",
						[login, password]
					  );
					// res.render('/')
					  res.json({
						id: result2.insertId,
						login, 
						password
					   
					  });
				//});
			  } catch (error) {
				//return res.status(500).json({ message: error.message });
				return 'fALLO1'
			  }
		  /*return res
			.status(400)
			.json({ message: "No hay ningun usuario resgistrado" });*/
			return 'fallo2'
		}
		console.log('el usuario ya existe'); 
		return res
			.status(400)
			.json({ message: "este usuario ya existe" });
	  } catch (error) {
		//return res.status(500).json({ message: error.message });
		return 'fallo3'
	  }
		
  }

  



/*
// http://localhost:3000/
app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});

// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		 pool.query('SELECT * FROM USUARIO WHERE login = ? AND Password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

// http://localhost:3000/home
app.get('/home', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});
*/


