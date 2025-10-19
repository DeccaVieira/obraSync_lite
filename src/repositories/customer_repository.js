import prisma from "../database/prismaClient.js";

async function add_customer(manager_id, data, hash) {
    console.log(manager_id, data);
    
    try {
        return prisma.customer.create({
            data: {
        manager_id: Number(manager_id),
        name :data.name,
        cpf : data.cpf,          
        email :data.email,         
        phone : data.phone,         
        client_since : data.client_since,   
        password_hash : hash,
        cnpj : data.cnpj,          
        company_name : data.company_name 
            }
        })
    } catch (error) {
        throw new Error(error);
        
        
    }
}

async function find_customer(manager_id, cpf) {
    try {
        return prisma.customer.findFirst({
            where: {
                cpf: cpf, 
                manager_id: Number(manager_id)
            }
        })

    } catch (error) {
         throw new Error(error);
    }
}


async function get_customer_by_manager(manager_id) {
  try {
        return prisma.customer.findMany({
      where : {
        manager_id: Number(manager_id)
      }
    })
  } catch (error) {
    throw new Error(error);
    
  }
}

const customer_repository = {
    add_customer, find_customer, get_customer_by_manager
};

export default customer_repository;