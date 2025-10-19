import employee_service from "../services/employee_service.js";

async function add_employee(req, res) {
    const data = req.body;
    const {manager_id} = req.params;
    if (!manager_id) {
        res.status(400).send("Dados incompletos")
    }
       try {
        if (!data) {
            }
        const new_employee = await employee_service.add_employee(manager_id, data)
        res.status(201).json({message:`Cadastro do colaborador ${new_employee.name} criado com sucesso!`})
    } catch (error) {
        console.log(error);
        
        return res.status(error.status || 400).json({message: error.message})
    }
    }

    async function get_employee_by_manager(req, res) {
        const {manager_id} =  req.params;
        
        if (!manager_id) {
            res.status(400).send("Dados incompletos")
        }
        try {
           const employees_by_manager = await employee_service.get_employee_by_manager(manager_id);
           res.status(200).send((employees_by_manager))
        } catch (error) {
          return res.status(error.status || 400).json({message: error.message})  
        }
    }

    const employee_controller = {
        add_employee, get_employee_by_manager
    }

    export default employee_controller