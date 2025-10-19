import project_repository from "../repositories/project_repository.js";
import manager_repository from "../repositories/manager_repository.js";
import customer_repository from "../repositories/customer_repository.js";

async function add_project(manager_id, customer_id, data) {
    try {

        const manager_exists =  await manager_repository.find_manager_by_id(manager_id);
    
        const customer_exists = await customer_repository.find_customer(manager_id, customer_id);
        
        if (!manager_exists || !customer_exists) {
        throw new Error("Erro, contate o suporte");
            }

// Calcula o total dos materiais (unit_price * quantity)
const estimated_cost_of_materials = data.material_estimate?.reduce((acc, item) => {
  return acc + (item.unit_price * item.quantity);
}, 0) || 0;

// Calcula o total dos serviços (price)
const total_estimated_cost_of_services = data.contracted_services?.reduce((acc, item) => {
  return acc + item.price;
}, 0) || 0;

// Total geral
const total_cost = estimated_cost_of_materials + total_estimated_cost_of_services;

// Adiciona os valores calculados ao objeto data
data.estimated_cost_of_materials = estimated_cost_of_materials;
data.total_estimated_cost_of_services = total_estimated_cost_of_services;
data.total_cost = total_cost;

console.log({
  estimated_cost_of_materials,
  total_estimated_cost_of_services,
  total_cost
});
    await project_repository.add_project(manager_exists.id, customer_exists.id, data);
    
    return ;
    } catch (error) {
        throw new Error(error);
        
    }
};

async function get_project_by_customer(customer_id, manager_id) {
       const manager_exists =  await manager_repository.find_manager_by_id(manager_id);
    
        const customer_exists = await customer_repository.find_customer(manager_id, customer_id);
        
        if (!manager_exists || !customer_exists) {
        throw new Error("Erro, contate o suporte");
            }
    try {
        const projects_by_customer = await project_repository.get_project_by_customer(customer_id, manager_id)
    return projects_by_customer
    } catch (error) {
        throw new Error(error);
        
    }
}

async function get_project_by_manager( manager_id) {
       const manager_exists =  await manager_repository.find_manager_by_id(manager_id);
    
               if (!manager_exists) {
        throw new Error("Erro, contate o suporte");
            }
    try {
        const projects_by_manager = await project_repository.get_project_by_manager(manager_id)
    return projects_by_manager
    } catch (error) {
        throw new Error(error);
        
    }
}

const project_service = {
    add_project, get_project_by_customer, get_project_by_manager
};

export default project_service;