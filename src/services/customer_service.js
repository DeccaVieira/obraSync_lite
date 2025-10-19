import customer_repository from "../repositories/customer_repository.js";
import manager_repository from "../repositories/manager_repository.js";
import bcrypt from "bcrypt";

async function add_customer(manager_id, data) {
    try {
        const pass = data.password_hash;
        const saltRounds = 10; 
        const hash = await bcrypt.hash(pass, saltRounds);
        
        const manager_exists =  await manager_repository.find_manager_by_id(manager_id);
    
        const customer_exists = await customer_repository.find_customer(manager_exists.id, data.cpf);
        
        if (customer_exists) {
            throw new Error("Cliente já cadastrado!");
                    }
        if (!manager_exists) {
        throw new Error("Erro, contate o suporte");
            }
    const customer = await customer_repository.add_customer(manager_exists.id, data, hash);
    return customer;
    } catch (error) {
        throw new Error(error);
        
    }
}


async function get_customer_by_manager(manager_id) {
    try {
        const manager_exists =  await manager_repository.find_manager_by_id(manager_id);
    if (!manager_exists) {
        throw new Error("Erro, contate o suporte");
            }
    const customers_by_manager = await customer_repository.get_customer_by_manager(manager_exists.id);
    return customers_by_manager;
    } catch (error) {
       throw error
        
    }
}

const customer_service = {
    add_customer, get_customer_by_manager,
};

export default customer_service;