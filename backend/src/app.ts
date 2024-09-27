import 'dotenv/config'
import express from 'express'
import {db} from './config/mssql'
import * as auth from './routes/auth'
import * as categories from './routes/categories'
import * as tasks from './routes/task'
import * as tags from './routes/tags'

const app = express()

app.use(express.json());

app.use('/api/auth', auth.router)
app.use('/api/categories', categories.router)
app.use('/api/tasks', tasks.router)
app.use('/api/tags', tags.router)

app.listen(process.env.port || 3000, async () => {
    const pool = await db()
    
    console.log("Server listening on PORT", process.env.port || 3000);
});
