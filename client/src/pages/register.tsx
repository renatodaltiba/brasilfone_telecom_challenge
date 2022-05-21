import { Button } from 'components/Button'
import { PhoneWithCountry } from 'components/PhoneWithCountry'
import Link from 'next/link'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import 'react-phone-input-2/lib/style.css'

import { Form } from 'templates/Form'

export default function Register() {
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
    control,
    formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit((data) => console.log())

  return (
    <Form>
      <div className="flex flex-col items-center px-8 pt-11 pb-14">
        <h2 className="font-custom text-2xl font-bold text-primary">
          Cadastre-se
        </h2>
        <form onSubmit={onSubmit} className="mt-6 flex w-full flex-col gap-2">
          <label
            className={` ${
              errors.emailorphone ? 'text-error' : 'text-primary'
            } flex w-full flex-col font-normal `}
          >
            Nome
            <input
              type="text"
              className={`${
                errors.name ? 'ring-error' : 'ring-[#3D454C]'
              } mt-2 h-10 w-full rounded-md px-3 outline-none ring-1 `}
              {...register('name')}
            />
          </label>
          <label
            className={` ${
              errors.email ? 'text-error' : 'text-primary'
            } flex w-full flex-col font-normal `}
          >
            E-mail
            <input
              type="email"
              className={`${
                errors.email ? 'ring-error' : 'ring-[#3D454C]'
              } mt-2 h-10 w-full rounded-md px-3 outline-none ring-1 `}
              {...register('email')}
            />
          </label>
          <label
            className={` ${
              errors.emailorphone ? 'text-error' : 'text-primary'
            } flex w-full flex-col font-normal `}
          >
            Número
            <Controller
              defaultValue={''}
              name="phone"
              control={control}
              render={({ field: { onChange, value, ref } }) => (
                <PhoneWithCountry
                  className={`${
                    errors.password ? 'ring-error' : 'ring-[#3D454C]'
                  } mt-2 h-10 w-full rounded-md px-3 outline-none ring-1 `}
                  onChange={onChange}
                  value={value}
                />
              )}
            ></Controller>
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
          <label
            className={` ${
              errors.password ? 'text-error' : 'text-primary'
            } flex w-full flex-col font-normal `}
          >
            Repetir senha
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
          <span>Já é cliente Disparo Pro ?</span>
          <Link href="/login" passHref>
            <a>
              <span className="font-custom text-base font-medium text-primary hover:brightness-75">
                Fazer Login
              </span>
            </a>
          </Link>
        </div>
      </div>
    </Form>
  )
}
