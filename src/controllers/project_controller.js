import project_service from "../services/project_service.js";


 async function add_project_by_customer(req, res) {
        const {manager_id, customer_id} =  req.params;
        const data = req.body;


        if (!manager_id || !customer_id) {
            res.status(400).send("Dados incompletos")
        }
        try {
           await project_service.add_project(manager_id, customer_id, data)
           res.status(201).send("Projeto cadastrado com sucesso!")
        } catch (error) {
          return res.status(error.status || 400).json({message: error.message})  
        }
    }

async function get_project_by_customer(req, res) {
    const {manager_id, customer_id} =  req.params;
try {
    const project_by_customer = await project_service.get_project_by_customer(customer_id, manager_id)
res.status(200).send(project_by_customer)
} catch (error) {
    return res.status(error.status || 400).json({message: error.message})
}

}

async function get_project_by_manager(req, res) {
    const {manager_id} =  req.params;
try {
    const project_by_manager = await project_service.get_project_by_manager( manager_id)
res.status(200).send(project_by_manager)
} catch (error) {
    return res.status(error.status || 400).json({message: error.message})
}

}

const project_controller = {
    add_project_by_customer, get_project_by_customer, get_project_by_manager
};

export default project_controller;