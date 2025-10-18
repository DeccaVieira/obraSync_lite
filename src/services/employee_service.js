import employee_repository from "../repositories/employee_repository.js";
import bcrypt from "bcrypt";

async function add_employee(data) {
    try {
    const employee_exists = await employee_repository.find_employee(data.cpf);
    if (employee_exists){
throw new Error ("Usuário já cadastrado!")
    }
   
     const pass = data.password_hash;
      const saltRounds = 10; 
      const hash = await bcrypt.hash(pass, saltRounds);

   const new_employee = await employee_repository.add_employee(data, hash)

    return new_employee

    } catch (error) {
        throw error
    }
}

const employee_service = {
    add_employee, 
};

export default employee_service;