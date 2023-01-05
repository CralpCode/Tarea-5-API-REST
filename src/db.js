import { createPool, createConnection } from 'mysql2/promise'

export const pool = createPool({
    host: 'carlosrestapi.mysql.database.azure.com',
    user: 'Carlos',
    password: '--#Azure1234',
    port: 3306,
    database: 'companydb'
})