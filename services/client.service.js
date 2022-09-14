import Clientrepository from "../repositories/client.repository.js";

async function createClient(client) {
    return await Clientrepository.insertClient(client); 
}

export default {
    createClient
}