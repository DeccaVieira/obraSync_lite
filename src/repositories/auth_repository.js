import prisma from "../database/prismaClient.js"

async function compare_password(id, password) {
    if (!password) {
        throw new Error("Dados iválidos");
        }
    try {
       return prisma.manager.findFirst({
        where: {
            id: Number(id)
        }
       }) 
    } catch (error) {
        throw new Error(error.message);
        
    }
}

const auth_repository = {
    compare_password,
};

export default auth_repository;