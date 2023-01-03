import { Router } from "express"

const router = Router()

router.get('/lenguajes', (req ,res) => {
    res.send('Obteniendo lenguajes')
})

router.post('/lenguajes', (req ,res) => {
    res.send('creando lenguajes')
})

router.put('/lenguajes', (req ,res) => {
    res.send('actualizando lenguajes')
})

router.delete('/lenguajes', (req ,res) => {
    res.send('eliminando lenguajes')
})


export default router;