import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import {db} from './config/mssql'
import * as auth from './routes/auth'
import * as categories from './routes/categories'
import * as tasks from './routes/task'
import * as tags from './routes/tags'

const app = express()

app.use(express.json());

app.use(cors())

app.use('/api/auth', auth.router)
app.use('/api/categories', categories.router)
app.use('/api/tasks', tasks.router)
app.use('/api/tags', tags.router)

app.listen(process.env.PORT || 3005, async () => {
    const pool = await db();
    console.log("Server listening on PORT", process.env.PORT || 3005);
});
