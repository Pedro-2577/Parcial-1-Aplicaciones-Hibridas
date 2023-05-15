import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")

async function getClientes(filter = {}) {
    await client.connect()
    return db.collection("Cliente").find().toArray()
}

async function createCliente(cliente) {
    await client.connect()
    return db.collection("Cliente").insertOne(cliente)
}

async function getClienteById(id) {
    await client.connect()
    return db.collection("Cliente").findOne({ _id: new ObjectId(id) })
}

export {
    getClientes,
    createCliente,
    getClienteById
}