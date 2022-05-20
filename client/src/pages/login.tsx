import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from 'components/Button'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import { LoginSchema } from 'schemas/Login'
import { Form } from 'templates/Form'

export default function Login() {
  const passwordTypes = [
    {
      name: 'password'
    },
    {
      name: 'text'
    }
  ]

  const [passwordType, setPasswordType] = useState(passwordTypes[0].name)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(LoginSchema)
  })

  const onSubmit = handleSubmit((data) => console.log(data))
  return (
    <Form>
      <div className="flex flex-col items-center px-8 pt-11 pb-14">
        <h2 className="font-custom text-2xl font-bold text-primary">
          Conecte-se
        </h2>
        <form onSubmit={onSubmit} className="mt-6 flex w-full flex-col gap-2">
          <label
            className={` ${
              errors.emailorphone ? 'text-error' : 'text-primary'
            } flex w-full flex-col font-normal `}
          >
            E-mail ou Celular
            <input
              type="text"
              className={`${
                errors.emailorphone ? 'ring-error' : 'ring-[#3D454C]'
              } mt-2 h-10 w-full rounded-md px-3 outline-none ring-1 `}
              {...register('emailorphone')}
            />
          </label>
          <label
            className={` ${
              errors.password ? 'text-error' : 'text-primary'
            } flex w-full flex-col font-normal `}
          >
            Senha
            <div className="relative flex h-full items-center">
              <input
                type={passwordType}
                className={`${
                  errors.password ? 'ring-error' : 'ring-[#3D454C]'
                } mt-2 h-10 w-full rounded-md px-3 outline-none ring-1 `}
                {...register('password')}
              />
              <button
                onClick={() =>
                  setPasswordType(
                    passwordType === 'password' ? 'text' : 'password'
                  )
                }
                className="absolute right-4 text-xl"
              >
                {passwordType === 'password' ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </label>
          {errors.emailorphone && (
            <div className="flex items-center justify-center gap-2 pt-3 text-error">
              <IoIosWarning className="text-2xl" />
              <span>{errors.emailorphone.message}</span>
            </div>
          )}
          {errors.password && (
            <div className="flex items-center justify-center gap-2 pt-3 text-error">
              <IoIosWarning className="text-2xl" />
              <span>{errors.password.message}</span>
            </div>
          )}
          <div className="mx-auto mt-6 h-[50] w-full max-w-xs">
            <Button>Conectar</Button>
          </div>
        </form>

        <div className="flex flex-col pt-4 text-center">
          <span>Ainda não é cliente Disparo Pro?</span>
          <Link href="/register" passHref>
            <a>
              <span className="font-custom text-base font-medium text-primary hover:brightness-75">
                Criar Conta
              </span>
            </a>
          </Link>
        </div>
      </div>
    </Form>
  )
}
