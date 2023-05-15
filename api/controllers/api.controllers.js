import * as services from '../../services/services.js'

function getProyectos(req, res) {
    let filtro = {};

    if (['mobile', 'landing', 'webapp', 'ecommerce', 'game'].includes(req.body.section)) {
        filtro = { section: req.body.section };
    } 
    if (req.body.technologies && Array.isArray(req.body.technologies)) {
        if (req.body.technologies.length === 1) {
          filtro.technologies = req.body.technologies[0];
        } else {
          filtro.technologies = { $all: req.body.technologies };
        }
      }
      

    services.getProyectos(filtro)
        .then(function (proyectos) {
            res.status(200).json(proyectos);
        });
}


function createProyecto(req, res) {
          
    services.addProyecto(req.body)
        .then(function(newProyecto){
            res.status(201).json(newProyecto)
        })
}

function getProyectoById(req, res) {
    const id = req.params.id

    services.getProyectoById(id)
        .then(function (proyecto) {
            if (proyecto) {
                res.status(200).json(proyecto)
            }
            else {
                res.status(404).json({ error: { message: `Proyecto #${id} no encontrado.` } })
            }
        })
}

function replaceProyecto(req, res) {
    const id = req.params.id

    services.editProyecto(id, req.body)
        .then(function (newProyecto) {
            if (newProyecto) {
                res.status(200).json(newProyecto)
            }
            else {
                res.status(404).json({ error: { message: `Proyecto #${id} no encontrado.` } })
            }
        })
}

function updateProyecto(req, res) {
    const id = req.params.id

    services.editProyecto(id, req.body)
        .then(function (proyecto) {
            if (proyecto) {
                res.status(200).json(proyecto)
            }
            else {
                res.status(404).json({ error: { message: `Proyecto #${id} no encontrado.` } })
            }
        })
}

function deleteProyecto(req, res) {
    const id = req.params.id

    services.deleteProyecto(id)
        .then(function (proyecto) {
            if (proyecto) {
                res.status(200).json(proyecto)
            }
            else {
                res.status(404).json({ error: { message: `Proyecto #${id} no encontrado.` } })
            }
        })
}

function getProyectosBySection(req, res) {
    const section = req.params.section

    services.getProyectosBySection(section)
        .then(function (proyectos) {
            if (proyectos) {
                res.status(200).json(proyectos)
            }
            else {
                res.status(404).json({ error: { message: `Proyectos de la sección ${section} no encontrados.` } })
            }
        })
}

export {
    getProyectos,
    createProyecto,
    getProyectoById,
    replaceProyecto,
    updateProyecto,
    deleteProyecto,
    getProyectosBySection
}






