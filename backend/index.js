import 'dotenv/config'

import express from "express";
import morgan from "morgan";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import router from "./routes/router.js";
import './database.js'


const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'))
app.use(router)

//Static Files
app.use(express.static(join(__dirname, 'public')))


app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`)
})