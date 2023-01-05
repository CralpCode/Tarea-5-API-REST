import {pool} from "../db.js"

export const obtenerLenguajes = async (req ,res) => {
    const [rows] = await pool.query('SELECT * FROM lenguajes')
    res.json(rows)
}

export const obtenerLenguaje = async (req ,res) => {
    const [rows] = await pool.query('SELECT * FROM lenguajes WHERE id = ?', [req.params.id])
    
    if (rows.length <= 0) return res.status(404).json({
        message: 'no se han encontrado lenguaje'
    })
    res.json(rows[0])
}


export const crearLenguajes = async (req ,res) => {
    const {name, year} = req.body
    const [rows] = await pool.query('INSERT INTO lenguajes(name, year) VALUES (?, ?)', [name, year])
    res.send({
        id: rows.insertId,
        name,
        year
    })
}

export const actualizarLenguajes = async (req ,res) => {
    const {id} = req.params
    const {name, year} = req.body
    const [result] = await pool.query('UPDATE lenguajes SET name = IFNULL(?,name), year = IFNULL(?,year) WHERE id = ?', [name, year, id])

    if (result.affectedRows === 0 ) return res.status(404).json({
        message: 'no se han encontrado lenguaje'
    })

    const [rows] = await pool.query('SELECT * FROM lenguajes WHERE id = ?', [id])
    res.json(rows[0])
}

export const eliminarLenguajes = async (req ,res) => {
    const [result] = await pool.query('DELETE FROM lenguajes WHERE id = ?', [req.params.id])

    if (result.affectedRows <= 0 ) return res.status(404).json({
        message: 'no se han encontrado lenguaje'
    })

    res.sendStatus(204)
}