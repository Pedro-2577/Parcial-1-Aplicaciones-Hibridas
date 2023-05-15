import {Router} from 'express'
import * as controller from '../controllers/api.controllers.js'
import { validateProject, validateProjectUpdate } from '../../middlewares/projects.validate.middlewares.js'

const route = Router()

route.get('/filter/proyectos', controller.getProyectos)

route.get('/proyectos', controller.getProyectos)
route.post('/proyectos', [validateProject], controller.createProyecto)

route.get('/proyectos/:id', controller.getProyectoById)
route.put('/proyectos/:id', [validateProjectUpdate], controller.replaceProyecto)
route.patch('/proyectos/:id', [validateProjectUpdate], controller.updateProyecto)
route.delete('/proyectos/:id', controller.deleteProyecto)


export default route