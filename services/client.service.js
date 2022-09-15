import { cli } from "winston/lib/winston/config/index.js";
import Clientrepository from "../repositories/client.repository.js";

async function createClient(client) {
    return await Clientrepository.insertClient(client); 
}

async function getClients() {
     return await Clientrepository.getClients(id);
}

async function getClient(id) {
    return await Clientrepository.getClients(id);
}

async function deleteClient(req, res, next) {
    try {

    } catch (err) {
        
    }
}

async function updateClient(client) {
    return await Clientrepository.updateClient(client);
}

export default {
    createClient,
    getClients,
    getClient,
}