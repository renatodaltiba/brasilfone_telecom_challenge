import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from 'components/Button'
import { ErrorMessage } from 'components/ErrorMessage'
import { FormInput } from 'components/FormInput'
import { useAuth } from 'hooks/useAuth'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import { FieldError, useForm } from 'react-hook-form'
import { LoginSchema } from 'schemas/Login'
import { Form } from 'templates/Form'

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(LoginSchema)
  })

  const { signIn } = useAuth()
  const onSubmit = handleSubmit(async (data) => {
    try {
      await signIn({
        emailorphone: data.emailorphone,
        password: data.password
      })
    } catch (err: any) {
      if (err.response.status === 401) {
        setError('emailorphone', {
          message: 'Email ou senha inválidos'
        })

        setError('password', {
          message: 'Email ou senha inválidos'
        })
      }
    }
  })

  return (
    <Form>
      <div className="flex flex-col items-center px-8 pt-4 pb-7">
        <h2 className="font-custom text-[26px] font-bold text-primary">
          Login
        </h2>
        <form onSubmit={onSubmit} className="mt-6 flex w-full flex-col gap-2">
          <FormInput
            name="emailorphone"
            label="E-mail ou Telefone:"
            type="text"
            errors={errors}
            register={register}
          />
          <FormInput
            name="password"
            label="Senha:"
            type="password"
            errors={errors}
            register={register}
          />
          {Object.values(errors)
            .slice(0, 1)
            .map((error: FieldError) => {
              return <ErrorMessage message={error.message!} />
            })}

          <div className="mx-auto mt-[22px] h-[50] w-full max-w-[240px]">
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = parseCookies(ctx)

  if (token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
