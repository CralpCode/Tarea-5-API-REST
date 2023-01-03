import express from 'express'
import lengRoutes from './routes/lenguajes.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()


app.use(indexRoutes);
app.use(lengRoutes);

app.listen(3000)
console.log("Server corriendo en el puerto: 3000");