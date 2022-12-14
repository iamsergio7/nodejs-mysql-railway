import { pool } from "../db/db.js";
//const bcrypt = require('bcrypt')
import bcrypt from 'bcrypt'

export const logout = (req, res) =>{  //cerrar sesion
	if (req.session.loggedin == true){
		
		req.session.destroy();
	}
	res.redirect('/');
  }