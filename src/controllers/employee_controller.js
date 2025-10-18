import employee_service from "../services/employee_service.js";

async function add_employee(req, res) {
    const data = req.body
    
       try {
        if (!data) {
            }
        const new_employee = await employee_service.add_employee(data)
        res.status(201).json({message:`Cadastro do colaborador ${new_employee.name} criado com sucesso!`})
    } catch (error) {
        console.log(error);
        
        return res.status(error.status || 400).json({message: error.message})
    }
    }

    const employee_controller = {
        add_employee,
    }

    export default employee_controller