import employee_repository from "../repositories/employee_repository.js";
import manager_repository from "../repositories/manager_repository.js";
import bcrypt from "bcrypt";

async function add_employee(manager_id, data) {
    try {
    const employee_exists = await employee_repository.find_employee(data.cpf);
    if (employee_exists){
throw new Error ("Usuário já cadastrado!")
    }
   
     const pass = data.password_hash;
      const saltRounds = 10; 
      const hash = await bcrypt.hash(pass, saltRounds);

   const new_employee = await employee_repository.add_employee(manager_id, data, hash)

    return new_employee

    } catch (error) {
        throw error
    }
}

async function get_employee_by_manager(manager_id) {
    try {
        const manager_exists =  await manager_repository.find_manager_by_id(manager_id);
    if (!manager_exists) {
        throw new Error("Erro, contate o suporte");
            }
    const employees_by_manager = await employee_repository.get_employee_by_manager(manager_exists.id);
    return employees_by_manager;
    } catch (error) {
       throw error
        
    }
}

const employee_service = {
    add_employee, get_employee_by_manager, 
};

export default employee_service;