import prisma from "../database/prismaClient.js";

async function add_project(manager_id, customer_id, data) {
    console.log(data, "repository");
    
    try {
        return prisma.project.create({
            data:{
                address: data.address,
                contracted_services: data.contracted_services,
                material_estimate: data.material_estimate,
                estimated_start_date: data.estimated_start_date,
                estimated_end_date: data.estimated_end_date,
                manager_id: Number(manager_id),
                customer_id: Number(customer_id),
                estimated_cost_of_materials: data.estimated_cost_of_materials,
                total_cost: data.total_cost,
                total_estimated_cost_of_services: data.total_estimated_cost_of_services
            }
        })
    } catch (error) {
        throw new Error(error);
        
    }
}

async function get_project_by_customer(customer_id, manager_id) {
    try {
        return prisma.project.findMany({
            where: {
                customer_id: Number(customer_id),
                manager_id: Number(manager_id)
            },
      include: {
        customer: {
          select: {
            name: true,
            email: true,
            phone: true,
            cpf: true,
            cnpj: true,
            company_name: true
          }
        }
      },
      orderBy: {
        id: 'desc' // mostra o projeto mais recente primeiro
      }
        })
    } catch (error) {
        throw new Error(error);
        
    }
}

async function get_project_by_manager(manager_id) {
  try {
    const projects = await prisma.project.findMany({
      where: {
        manager_id: Number(manager_id)
      },
      include: {
        customer: {
          select: {
            name: true,
            email: true,
            phone: true,
            cpf: true,
            cnpj: true,
            company_name: true
          }
        }
      },
      orderBy: {
        id: 'desc' // mostra o projeto mais recente primeiro
      }
    });

    return projects;
  } catch (error) {
    console.error("Erro ao buscar projetos do gerente:", error);
    throw new Error("Erro interno ao buscar projetos do gerente.");
  }
}

const project_repository = {
    add_project, get_project_by_customer, get_project_by_manager
}

export default project_repository;