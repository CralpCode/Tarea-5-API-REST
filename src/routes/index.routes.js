import { Router } from "express"
import {pool} from '../db.js'

const router = Router()

router.get('/ping',  async (req ,res) => {
    /* try { */
        const [result] =  await pool.query('SELECT "Pong" AS result')
        console.log(result)
        res.json(result[0])
    /* } catch (error) {
        res.send('error');
    } */
})

export default router;