import { config } from "dotenv";

config()

export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_HOST || 'Carlos';
export const DB_PORT = process.env.DB_PORT || '3036';
export const DB_HOST = process.env.DB_HOST || 'carlosrestapi.mysql.database.azure.com';
export const DB_PASSWORD = process.env.DB_PASSWORD || '--#Azure1234';
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb';