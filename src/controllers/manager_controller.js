import manager_service from "../services/manager_service.js"

async function add_manager(req, res) {
    const data = req.body
  

    try {
       await manager_service.add_manager(data);
       res.status(201).send(`Cadastro realizado com sucesso`) 
    } catch (error) {
        return res.status(error.status || 400).json({message: error.message})
    }
};

const manager_controller = {
    add_manager,
}
export default manager_controller;