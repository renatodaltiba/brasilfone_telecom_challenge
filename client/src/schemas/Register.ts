import * as yup from 'yup'

export const RegisterSchema = yup
  .object({
    name: yup
      .string()
      .required('O campo nome não foi inserido, digite e tente novamente.')
      .min(5, 'Informe um nome de usuário correto.')
      .max(100, 'Informe um nome de usuário correto.'),
    email: yup
      .string()
      .trim()
      .required('O campo E-mail não foi inserido, digite e tente novamente.')
      .min(5, 'Informe um e-mail correto.')
      .max(100, 'Informe um e-mail correto.')
      .email('Informe um e-mail correto.'),
    ddi: yup.object().required('Informe um DDI.'),
    password: yup
      .string()
      .required('Informe uma senha correta.')
      .min(8, 'Informe uma senha correta.')
      .max(60, 'Informe uma senha correta.'),
    confirm_password: yup
      .string()
      .required(
        'O campo Repetir senha não foi inserido, digite e tente novamente.'
      )
      .min(8, 'Informe uma senha correta.')
      .max(60, 'Informe uma senha correta.')
      .oneOf([yup.ref('password'), null], 'As senhas não conferem.'),
    numero: yup
      .string()
      .required('O campo número não foi inserido, digite e tente novamente.')
      .min(9, 'Informe um número correto.')
      .max(11, 'Informe um número correto.'),
    acceptTerms: yup.bool().oneOf([true], 'Você precisa aceitar os termos.')
  })
  .required('Nenhum campo foi inserido, digite e tente novamente.')
