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

async function change_password(id, new_password) {

    try {
        return prisma.manager.update({
where : {id: Number(id)},
data: {password_hash: new_password},
        })
    } catch (error) {
        throw new Error(error.message);
        
    }
}

const auth_repository = {
    compare_password, change_password,
};

export default auth_repository;