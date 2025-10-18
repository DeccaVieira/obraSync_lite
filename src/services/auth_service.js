import auth_repository from "../repositories/auth_repository.js";
import manager_repository from "../repositories/manager_repository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function compare_password(email, password) {
    try {

        if (!email || !password) {
            throw new Error("Dados inválidos!");
        }
        
        const JWT_SECRET = process.env.JWT_SECRET;
        if (!JWT_SECRET) throw new Error("JWT_SECRET não definido!");
        
        const manager_exists = await manager_repository.find_manager(email);
        if (!manager_exists) {
            throw new Error("Usuário não cadastrado!");
        }
        
        const password_ok = await bcrypt.compare(password, manager_exists.password_hash);
        if (!password_ok) {
            throw new Error("Usuário ou senha inválidos!");
        }
        
        const token = jwt.sign(
            { userId: manager_exists.id, role: manager_exists.role, name: manager_exists.name },
            JWT_SECRET,
            { expiresIn: "24h" }
        );
        
        return token
    
    } catch (error) {
         throw new Error(error.message);
    }
}


const auth_service = {
    compare_password, 
}

export default auth_service;