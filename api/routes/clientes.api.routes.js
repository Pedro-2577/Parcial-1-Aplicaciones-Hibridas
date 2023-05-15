import {Router} from 'express'
import * as controller from '../controllers/clientes.api.controllers.js'

const route = Router()


route.get('/clientes', controller.getClientes)
route.post('/clientes',  controller.createCliente)

route.get('/clientes/:id', controller.getClienteById)
route.get('/clientes/proyectos/:id', controller.getProyectoByCliente)

export default route

/*

AGREGAR VALIDACIONES DE YUP

agregar rutas para:


// falta controller y service

- obtener todos los proyectos que pertenecen a un cliente particular.
- traer todos los clientes
- crear un cliente

// falta service

*/

