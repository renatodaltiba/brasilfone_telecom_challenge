import * as yup from 'yup'

export const LoginSchema = yup
  .object({
    email: yup
      .string()
      .min(5, 'Informe um número ou e-mail correto.')
      .max(100, 'Informe um número ou e-mail correto.')
      .required('Informe um número ou e-mail correto.'),
    password: yup
      .string()
      .min(8, 'Informe uma senha correta.')
      .max(60, 'Informe uma senha correta.')
  })
  .required()
