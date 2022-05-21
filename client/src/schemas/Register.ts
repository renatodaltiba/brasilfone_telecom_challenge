import * as yup from 'yup'

export const RegisterSchema = yup
  .object({
    name: yup
      .string()
      .min(5, 'Informe um nome de usuário correto.')
      .max(100, 'Informe um nome de usuário correto.')
      .required('Informe um nome de usuário correto.'),
    email: yup
      .string()
      .trim()
      .min(5, 'Informe um e-mail correto.')
      .max(100, 'Informe um e-mail correto.')
      .email('Informe um e-mail correto.')
      .required('Informe um e-mail correto.'),
    ddi: yup.object().required('Informe um DDI.'),
    password: yup
      .string()
      .min(8, 'Informe uma senha correta.')
      .max(60, 'Informe uma senha correta.')
      .required('Informe uma senha correta.'),
    confirm_password: yup
      .string()
      .min(8, 'Informe uma senha correta.')
      .max(60, 'Informe uma senha correta.')
      .oneOf([yup.ref('password'), null], 'As senhas não conferem.')
      .required('Informe uma senha correta.'),
    numero: yup
      .string()
      .min(9, 'Informe um número correto.')
      .max(11, 'Informe um número correto.')
      .required('Informe um número correto.')
  })
  .required()
