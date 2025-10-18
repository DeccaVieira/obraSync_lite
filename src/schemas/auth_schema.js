import Joi from "joi";


export const auth_schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
})

