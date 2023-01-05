import express from 'express'
import lengRoutes from './routes/lenguajes.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json());

app.use(indexRoutes);
app.use('/api',lengRoutes);

app.listen(3004)
console.log("Server corriendo en el puerto: 3004");