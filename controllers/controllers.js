import * as services from '../services/services.js'
import * as views from '../views/views.js'


function getProyectos(req, res) {

    services.getProyectos({ section: req.params.section })
        .then(function (proyectos) {
            res.send(views.createProyectoListPage(proyectos))
        })
}


function getProyectoDetail(req, res) {
    const id = req.params.id

    services.getProyectoById(id)
        .then(function (proyecto) {
            if (proyecto) {
                res.send(views.createProyectoPage(proyecto))
            }
            else {
                res.send(views.createPage('Proyecto no encontrado', '<p>El proyecto no existe</p>'))
            }

        })
}

function getProyectoNuevo(req, res) { 

    if(!req.body.hasOwnProperty('name')){
        res.send(views.formProyectoNuevo())
    }
}

function postAgregarProyecto(req, res) {
         
            if(req.body) {
                services.addProyecto(req.body)
                .then(function (project) {
                    res.send(views.createPage('Proyecto creado', `<p>El proyecto ${project.name} ha sido creado con la categoria ${project.section}</p>`))
                })
            }else{
                res.send(views.formProyectoNuevo('Error: Faltan datos'))
            }
}

function getProyectoEdit(req, res) {
    const id = req.params.id

    services.getProyectoById(id)
        .then(function (proyecto) {
            if (proyecto) {
                res.send(views.editProjectPage(proyecto))
            }
            else {
                res.send(views.createPage('Proyecto no encontrado', '<p>El proyecto no existe</p>'))
            }

        })
}

function postProyectoEdit(req, res) {
            if(req.body) {
                 services.editProyecto(req.params.id, req.body)
                .then(function (proyecto) {
                    res.send(views.createPage('Proyecto editado', `<p>El proyecto ${proyecto.name} ha sido editado</p>`))
                })
            }else{
                res.send(views.createPage('Error', '<p>Ups, algo salio mal</p>'))
            }
}

function getProyectoDelete(req, res) {
    const id = req.params.id

    services.deleteProyecto(id)
        .then(function (proyecto) {
            if (proyecto) {
                res.send(views.createPage('Proyecto eliminado', `<p>El proyecto ${proyecto.name} ha sido eliminado</p>`))
            }
            else {
                res.send(views.createPage('Proyecto no encontrado', '<p>El proyecto no existe</p>'))
            }

        })
}
    
function getProyectosBySection(req, res) {
    const section = req.params.section

    services.getProyectosBySection(section)
        .then(function (proyectos) {
            res.send(views.createProyectoListPage(proyectos))
        })
}

export {
    getProyectos,
    getProyectoDetail,
    getProyectoNuevo,
    postAgregarProyecto,
    getProyectoEdit,
    postProyectoEdit,
    getProyectoDelete,
    getProyectosBySection
}