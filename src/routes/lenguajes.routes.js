import { Router } from "express"
import { obtenerLenguajes, crearLenguajes, actualizarLenguajes, eliminarLenguajes,obtenerLenguaje } from "../controllers/lenguajes.controller.js"

const router = Router()

router.get('/lenguajes', obtenerLenguajes )

router.get('/lenguajes/:id', obtenerLenguaje )

router.post('/lenguajes', crearLenguajes)

router.patch('/lenguajes/:id', actualizarLenguajes)

router.delete('/lenguajes', eliminarLenguajes)

router.delete('/lenguajes/:id', eliminarLenguajes)


export default router;