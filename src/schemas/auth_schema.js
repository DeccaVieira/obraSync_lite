import Joi from "joi";


export const auth_schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
})

export const change_password_schema = Joi.object({
    email: Joi.string().required(),
    old_password: Joi.string().required(),
    new_password: Joi.string().required()
})