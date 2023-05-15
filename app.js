import express from 'express'
import Route from './routes/routes.js'
import RouteApi from './api/routes/api.routes.js'
import ClientesRouteApi from './api/routes/clientes.api.routes.js'


const app = express()
app.use(express.urlencoded({ extended: true }))
app.use('/api', express.json())

app.use('/', express.static('public'))

app.use('/', Route)
app.use('/api', RouteApi)
app.use('/api', ClientesRouteApi)

app.listen(2222, function () {
    console.log('Servidor corriendo en el host http://localhost:2222')
})