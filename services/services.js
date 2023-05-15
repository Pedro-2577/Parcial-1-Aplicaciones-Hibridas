import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")


async function getProyectos(filter = {}) {
    
    const filtros = { deleted: { $ne: true } }

    if (filter?.section) {
        filtros.section = { $regex: filter.section, $options: 'i' }
    }

    if (filter?.technologies) {
        filtros.technologies = typeof filter.technologies === 'string' ? { $all: filter.technologies.split(';') } : filter.technologies
    }

    await client.connect()
    return db.collection("Projects").find(filtros).toArray()
}


async function getProyectoById(id) {
    await client.connect()
    return db.collection("Projects").findOne({ _id: new ObjectId(id) })
}

async function getProyectoByName(name) {
    await client.connect()
    return db.collection("Projects").find({ 'cliente.nombre': name }).toArray()
}


async function addProyecto(newProyecto) {
    await client.connect()
    await db.collection("Projects").insertOne(newProyecto)
    return newProyecto
}

async function editProyecto(id, proyecto) {
    await client.connect()
    await db.collection("Projects").updateOne({ _id: new ObjectId(id) }, { $set: proyecto })
    return proyecto    
}

async function deleteProyecto(id) {
    await client.connect()
    await db.collection("Projects").updateOne({ _id: new ObjectId(id) }, { $set: { deleted: true }});
    return {
        id: id
    }
}

async function replaceProyecto(id, proyecto) {
    await client.connect()
    await db.collection("Projects").replaceOne({ _id: new ObjectId(id) }, proyecto)
    return proyecto
}


export {
    getProyectos,
    getProyectoById,
    addProyecto,
    editProyecto,
    deleteProyecto,
    replaceProyecto,
    getProyectoByName
}