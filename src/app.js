import express from 'express'
import lengRoutes from './routes/lenguajes.routes.js'
import indexRoutes from './routes/index.routes.js'
const app = express()

app.use(express.json());

app.use(indexRoutes);
app.use('/api',lengRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message:'No se encontro la ruta'
    })
})

export default app;