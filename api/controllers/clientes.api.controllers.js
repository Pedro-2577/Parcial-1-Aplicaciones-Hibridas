import * as services from '../../services/clientes.services.js'
import * as servicesProyectos from '../../services/services.js'

function getClientes(req, res) {
    services.getClientes()
        .then(function (clientes) {
            res.status(200).json(clientes)
        })
}

function createCliente(req, res) {
    services.createCliente(req.body)
        .then(function (newCliente) {
            res.status(201).json(newCliente)
        })
}

function getClienteById(req, res) {
    const id = req.params.id

    services.getClienteById(id)
        .then(function (cliente) {
            if (cliente) {
                res.status(200).json(cliente)
            }
            else {
                res.status(404).json({ error: { message: `Cliente #${id} no encontrado.` } })
            }
        })
}

function getProyectoByCliente(req, res) {
    const id = req.params.id

    services.getClienteById(id)
        .then(function (cliente) {
            if (cliente) {
                servicesProyectos.getProyectoByName(cliente.nombre)
                    .then(function (proyectos) {
                        res.status(200).json(proyectos)
                    })
            }
            else {
                res.status(404).json({ error: { message: `Cliente #${id} no encontrado.` } })
            }
        })
}

export {
    getClientes,
    createCliente,
    getClienteById,
    getProyectoByCliente
}