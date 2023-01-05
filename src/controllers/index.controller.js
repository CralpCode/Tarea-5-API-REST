import { pool } from "../db.js";

export const welcome = async (req ,res) => {
    res.json({
        message: "Bienvenido a mi Api"
    })
}

export const ping = async (req ,res) => {
    try { 
        const [result] =  await pool.query('SELECT "Pong" AS result')
        console.log(result)
        res.json(result[0])
    } catch (error) {
        console.log(errora)
        return res.status(500).json({
            message : 'Algo no anda bien'
        })
    } 
}