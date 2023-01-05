import {pool} from "../db.js"

export const obtenerLenguajes = async (req ,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM lenguajes')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message : 'Ago no anda bien'
        })
    }
}

export const obtenerLenguaje = async (req ,res) => {

    try {
        const [rows] = await pool.query('SELECT * FROM lenguajes WHERE id = ?', [req.params.id])
    
    if (rows.length <= 0) return res.status(404).json({
        message: 'no se han encontrado lenguaje'
    })
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message : 'Ago no anda bien'
        })
    }

    
}


export const crearLenguajes = async (req ,res) => {
    const {name, year} = req.body
    try {
        const [rows] = await pool.query('INSERT INTO lenguajes(name, year) VALUES (?, ?)', [name, year])
        res.send({
        id: rows.insertId,
        name,
        year
    })
    } catch (error) {
        return res.status(500).json({
            message : 'Ago no anda bien'
        })
    }
    
}

export const actualizarLenguajes = async (req ,res) => {
    const {id} = req.params
    const {name, year} = req.body
    try {
        const [result] = await pool.query('UPDATE lenguajes SET name = IFNULL(?,name), year = IFNULL(?,year) WHERE id = ?', [name, year, id])

        if (result.affectedRows === 0 ) return res.status(404).json({
            message: 'no se han encontrado lenguaje'
        })

        const [rows] = await pool.query('SELECT * FROM lenguajes WHERE id = ?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message : 'Ago no anda bien'
        })
    }
    
}

export const eliminarLenguajes = async (req ,res) => {
    try {
        const [result] = await pool.query('DELETE FROM lenguajes WHERE id = ?', [req.params.id])

        if (result.affectedRows <= 0 ) return res.status(404).json({
            message: 'no se han encontrado lenguaje'
        })

        res.sendStatus(204)    
    } catch (error) {
        return res.status(500).json({
            message : 'Ago no anda bien'
        })
    }
    
}