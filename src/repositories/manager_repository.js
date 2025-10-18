import prisma from "../database/prismaClient.js"

async function add_manager(data, hash) {
    try {
        return prisma.manager.create({
            data: {
                name: data.name,
                email: data.email,
                cpf: data.cpf,
                phone: data.phone,
                role: data.role,
                cnpj: data.cnpj,
                company_name: data.company_name,
                password_hash: hash
            }
        })
    } catch (error) {
        throw new Error(error.message);
        
    }
};

async function find_manager(email) {
    try {
        return prisma.manager.findFirst({
            where: {email}
        })
    } catch (error) {
       throw new Error(error.message); 
    }
}

const manager_repository ={
    add_manager, find_manager
}

export default manager_repository;
