import Joi from "joi";

export const employee_schema = Joi.object({
  email: Joi.string().required(),
  name : Joi.string().required(),
  date_of_birth : Joi.string().required(),
  rg : Joi.string().required(),
  cpf : Joi.string().required(),
  drivers_license : Joi.boolean().required(),
  admission_date  : Joi.string().required(),
  password_hash : Joi.string().required(),
  occupation : Joi.string().required(),
})