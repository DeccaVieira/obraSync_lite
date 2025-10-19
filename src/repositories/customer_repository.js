import prisma from "../database/prismaClient.js";

async function add_customer(manager_id, data) {
    try {
        return prisma.customer.create({
            data: {
        manager_id: Number(manager_id),
        name :data.name,           
        email :data.email,         
        phone : data.phone,         
        client_since : data.client_since,   
        password_hash : data.password_hash,
        cnpj : data.cnpj,          
        company_name : data.company_name 
            }
        })
    } catch (error) {
        
    }
}

const customer_repository = {
    add_customer,
};

export default customer_repository;