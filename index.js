import express from "express";
import cors from "cors";
import session  from "express-session";
import path from "path";

import { PORT } from "./config.js";
import Routes from "./routes/Casos.routes.js";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(Routes);
app.listen(PORT);
/*app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));*/

console.log(`Server is running on port ${PORT}`);
