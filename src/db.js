import { createPool, createConnection } from 'mysql2/promise'

/* export const pool =  createConnection({host:"carlosrestapi.mysql.database.azure.com", user:"Carlos", password:"--#Azure1234", database:"companydb", port:3306}); */

export const pool = createPool({
    host: 'carlosrestapi.mysql.database.azure.com',
    user: 'Carlos',
    password: '--#Azure1234',
    port: 3306,
    database: 'companydb'
})