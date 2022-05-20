import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from 'components/Button'
import { Illustration } from 'components/Illustration'
import { Logo } from 'components/Logo'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import { LoginSchema } from 'schemas/Login'
export default function Login() {
  const passwordTypes = [
    {
      name: 'password'
    },
    {
      name: 'text'
    }
  ]

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(LoginSchema)
  })
  const onSubmit = (data: any) => console.log(data)
  const [passwordType, setPasswordType] = useState(passwordTypes[0].name)

  return (
    <div className="relative flex h-full w-full flex-row">
      <header className="absolute top-8 flex w-full justify-center lg:left-0 lg:justify-start lg:pl-7">
        <Logo />
      </header>
      <div className="hidden h-screen items-center justify-center bg-gradient-to-br from-[#3AA3F5DB] to-[#123D68] lg:flex lg:w-1/2">
        <Illustration />
      </div>
      <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-[#3AA3F5DB] to-[#123D68] shadow-lg lg:w-1/2 lg:from-[white] lg:to-[white]">
        <div className="absolute z-0 flex w-screen lg:hidden">
          <Illustration />
        </div>
        <section className="relative z-20 flex h-auto w-full max-w-sm items-center justify-center rounded-lg bg-white shadow-lg lg:h-auto lg:max-w-[400px]">
          <div className="z-20 w-full rounded-xl lg:bg-white">
            <div className="flex flex-col items-center px-8 pt-11 pb-14">
              <h2 className="font-custom text-2xl font-bold text-primary">
                Conecte-se
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-6 flex w-full flex-col gap-2"
              >
                <label
                  className={` ${
                    errors.email ? 'text-error' : 'text-primary'
                  } flex w-full flex-col font-normal `}
                >
                  E-mail ou Celular
                  <input
                    type="text"
                    className={`${
                      errors.email ? 'ring-error' : 'ring-[#3D454C]'
                    } mt-2 h-10 w-full rounded-md px-3 outline-none ring-1 `}
                    {...register('email')}
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
                {errors.email && (
                  <div className="flex items-center justify-center gap-2 pt-3 text-error">
                    <IoIosWarning className="text-2xl" />
                    <span>{errors.email.message}</span>
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
          </div>
        </section>
      </div>
    </div>
  )
}
