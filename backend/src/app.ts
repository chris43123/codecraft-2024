import 'dotenv/config'
import express from 'express'
import {db} from './config/mssql'
import { expressjwt } from 'express-jwt'

const app = express()

app.use(express.json());
app.use('/', (req, res, next) => {} )
app.listen(process.env.port || 3000, async () => {
    const pool = await db()
    
    console.log("Server listening on PORT", process.env.port || 3000);
});
