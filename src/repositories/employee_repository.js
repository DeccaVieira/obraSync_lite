import prisma from "../database/prismaClient.js";


async function add_employee(data, hash) {
    
  return prisma.employee.create({
    data: {
      name: data.name,
      date_of_birth: new Date(data.date_of_birth),
      rg: data.rg,
      cpf: data.cpf,
      drivers_license: data.drivers_license,
      occupation: data.occupation,
      admission_date: data.admission_date,
      password_hash: hash
    },
})
};

async function find_employee(cpf) {
  return prisma.employee.findUnique({
    where: { cpf }
  });
}


const employee_repository = {
    add_employee, find_employee
}

export default employee_repository;