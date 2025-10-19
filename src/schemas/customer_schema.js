import Joi from "joi";

export const customer_schema = Joi.object({
  email: Joi.string().required(),
  name : Joi.string().required(),
  cpf : Joi.string().required(),
  phone: Joi.string().required(),
  client_since: Joi.date().required(),
  cnpj : Joi.string(),
  company_name : Joi.string(),
  password_hash : Joi.string().required()
})
