import prisma from "../database/prismaClient.js";


async function add_employee(manager_id, data, hash) {
    console.log(manager_id);
    
  return prisma.employee.create({
   
    data: {
      name: data.name,
      date_of_birth: new Date(data.date_of_birth),
      rg: data.rg,
      cpf: data.cpf,
      drivers_license: data.drivers_license,
      occupation: data.occupation,
      admission_date: data.admission_date,
      password_hash: hash,
      manager_id: Number(manager_id)
    },
})
};

async function find_employee(cpf) {
  return prisma.employee.findUnique({
    where: { cpf }
  });
}

async function get_employee_by_manager(manager_id) {
  try {
        return prisma.employee.findMany({
      where : {
        manager_id: Number(manager_id)
      }
    })
  } catch (error) {
    throw new Error(error);
    
  }
}


const employee_repository = {
    add_employee, find_employee, get_employee_by_manager
}

export default employee_repository;