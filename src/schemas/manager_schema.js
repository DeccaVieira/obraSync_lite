import Joi from "joi";

export const manager_schema = Joi.object({
name: Joi.string().required(),
email: Joi.string().email().required(),
cpf: Joi.string().required(),
phone: Joi.string().required(),
role: Joi.string().required(),
password_hash: Joi.string().required(),
company_name: Joi.string().optional(),
cnpj: Joi.string().optional()
})