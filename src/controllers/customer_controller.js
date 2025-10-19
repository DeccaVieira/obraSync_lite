import customer_service from "../services/customer_service.js";

async function add_customer(req, res) {
    const data = req.body;
    const {manager_id} = req.params;

try {

   await customer_service.add_customer(manager_id, data);

    return res.status(201).send(`Cadastro do cliente realizado com sucesso!`);
} catch (error) {
    return res.status(error.status || 400).json({message: error.message})  
}
}

 async function get_customer_by_manager(req, res) {
        const {manager_id} =  req.params;
        
        if (!manager_id) {
            res.status(400).send("Dados incompletos")
        }
        try {
           const customers_by_manager = await customer_service.get_customer_by_manager(manager_id);
           res.status(200).send((customers_by_manager))
        } catch (error) {
          return res.status(error.status || 400).json({message: error.message})  
        }
    }


const customer_controller = {
    add_customer, get_customer_by_manager
}

export default customer_controller;