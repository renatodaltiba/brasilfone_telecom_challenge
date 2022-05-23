import { useAuth } from 'hooks/useAuth'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { destroyCookie, parseCookies } from 'nookies'
import { getAPIClient } from 'service/axios'

type UserProps = {
  user: {
    name: string
    email: string
    phone: string
    offers: boolean
  }
}

export default function Home({ user }: UserProps) {
  const { signOut } = useAuth()

  return (
    <>
      <Head>
        <title>Disparo PRO - HOME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto my-0 mt-5 flex w-full max-w-5xl flex-row justify-between">
        <div>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
          <p>{user?.phone}</p>
          <p>{user?.offers ? 'Sim' : 'Não'}</p>
        </div>

        <button
          className="rounded-lg bg-cyan-600 px-4 text-white hover:brightness-75"
          onClick={() => signOut()}
        >
          deslogar
        </button>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiCtx = getAPIClient(ctx)
  const { token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  try {
    const { data } = await apiCtx.get('/api/v1/users/me')

    return {
      props: {
        user: data
      }
    }
  } catch (e) {
    destroyCookie(ctx, 'token')

    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
}
