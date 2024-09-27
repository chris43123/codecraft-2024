import sql from 'mssql'

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.DB_HOST || '',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}
let pool: sql.ConnectionPool;
export const db = async () => {

    // make sure that any items are correctly URL encoded in the connection string
    if (!pool)
        pool = await sql.connect(sqlConfig)

    return pool

}