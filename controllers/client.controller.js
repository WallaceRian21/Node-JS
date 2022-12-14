import clientService from "../services/client.service.js";

async function createClient(req, res, next) {
    try {        
        let client = req.body;
        if(!client.name || !client.cpf || !client.phone || !client.email || !client.address) {
           throw new Error("Name, CPF, Phone, Email e Address são obrigatórios.")
        }
        res.send(await clientService.createClient(client));
        logger.info(`POST /client - ${JSON.stringify(client)}`);
    } catch (err) {
        next(err);
    }
}

async function getClients(req, res, next) {
   try {
      res.send(await clientService.getClients());
      logger.info("GET /client");
   } catch (err) {
     next(err);
   }
}

async function getClient(req, res, next) {
    try {
         res.send(await clientService.getClient(req.params.id));
         logger.info("GET /client");
    } catch (err) {
        next(err);
    }
}

export default {
    createClient,
    getClients,
    getClient
}