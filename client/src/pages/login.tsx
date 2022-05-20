import { Logo } from 'components/Logo'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

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
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: any) => console.log(data)
  const [passwordType, setPasswordType] = useState(passwordTypes[0].name)

  return (
    <>
      <div
        className="relative flex h-screen flex-col pt-12"
        style={{
          background:
            'linear-gradient(156.07deg, rgba(36, 152, 243, 0.86) -10.81%, #123D68 84.63%)'
        }}
      >
        <header className="flex w-full items-center justify-center">
          <Logo />
        </header>

        <section className="flex flex-1 items-center justify-center px-9">
          <div className="w-full rounded-xl bg-white">
            <div className="flex flex-col items-center px-8 pt-11 pb-14">
              <h2 className="font-custom text-2xl font-bold text-primary">
                Conecte-se
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-6 flex w-full flex-col gap-2"
              >
                <label className="flex w-full flex-col font-normal text-primary">
                  E-mail ou Celular
                  <input
                    type="email"
                    className="mt-2 h-10 w-full rounded-md px-3 outline-none ring-1 ring-[#3D454C]"
                    {...register('emailorphone')}
                  />
                </label>
                <label className="flex w-full flex-col font-normal text-primary ">
                  Senha
                  <div className="relative flex h-full items-center">
                    <input
                      type={passwordType}
                      className="mt-2 h-10 w-full rounded-md px-3 outline-none ring-1 ring-[#3D454C]"
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

                <button
                  className="mx-auto mt-6 h-[50px] w-full max-w-xs rounded-md px-3 text-sm font-bold text-white hover:brightness-75"
                  style={{
                    background:
                      'linear-gradient(156.07deg, rgba(36, 152, 243, 0.86) -10.81%, #123D68 84.63%)'
                  }}
                >
                  Conectar
                </button>
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
    </>
  )
}
