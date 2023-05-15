import express from 'express'
import * as controllers from '../controllers/controllers.js'
import { validateProject, validateProjectUpdate } from '../middlewares/projects.validate.middlewares.js'

const route = express.Router()


route.get('/proyectos/sec/:section', controllers.getProyectos)

route.get('/proyectos/nuevo', controllers.getProyectoNuevo)
route.post('/proyectos/nuevo', [validateProject], controllers.postAgregarProyecto)

route.get('/proyectos', controllers.getProyectos)
route.get('/proyectos/:id', controllers.getProyectoDetail)

route.get('/proyectos/edit/:id', controllers.getProyectoEdit)
route.post('/proyectos/edit/:id', [validateProjectUpdate], controllers.postProyectoEdit)

route.get('/proyectos/delete/:id', controllers.getProyectoDelete)


export default route