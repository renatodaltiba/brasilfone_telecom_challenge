import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from 'components/Button'
import { FormInput } from 'components/FormInput'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { IoIosWarning } from 'react-icons/io'
import { LoginSchema } from 'schemas/Login'
import { Form } from 'templates/Form'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(LoginSchema)
  })

  console.log(errors)

  const onSubmit = handleSubmit((data) => console.log())
  return (
    <Form>
      <div className="flex flex-col items-center px-8 pt-11 pb-14">
        <h2 className="font-custom text-2xl font-bold text-primary">
          Conecte-se
        </h2>
        <form onSubmit={onSubmit} className="mt-6 flex w-full flex-col gap-2">
          <FormInput
            name="emailorphone"
            label="E-mail"
            type="text"
            placeholder="Enter your email"
            errors={errors}
            register={register}
          />
          <FormInput
            name="password"
            label="Senha:"
            type="password"
            placeholder="Digite sua senha"
            errors={errors}
            register={register}
          />
          {Object.values(errors).map((error: any) => {
            return (
              <div className="flex items-center justify-center gap-2 pt-3 text-error">
                <IoIosWarning className="text-2xl" />
                <span>{error.message}</span>
              </div>
            )
          })}

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
