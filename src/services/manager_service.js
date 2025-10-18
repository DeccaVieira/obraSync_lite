import manager_repository from "../repositories/manager_repository.js"
import bcrypt from "bcrypt";

async function add_manager(data) {

    try {
        const pass = data.password_hash;
          const saltRounds = 11; 
          const hash = await bcrypt.hash(pass, saltRounds);

        await manager_repository.add_manager(data, hash);
        return;
    } catch (error) {
        throw new Error(error.message);         
    }
};

const manager_service ={
    add_manager,
}

export default manager_service;