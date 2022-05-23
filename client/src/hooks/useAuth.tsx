import Router from 'next/router'
import { destroyCookie, setCookie } from 'nookies'
import { createContext, useContext } from 'react'
import { api } from 'service/api'
import { CommonHeaderProps } from 'service/axios'

type SignInData = {
  emailorphone: string
  password: string
}

type AuthProviderProps = {
  children: React.ReactNode
}

type AuthContextType = {
  signIn: (data: SignInData) => Promise<void>
  signOut: () => void
}

type ResponseProps = {
  token: string
  refreshToken: {
    id: string
    expiresAt: number
    userId: string
  }
}

type UserProps = {
  name: string
  email: string
  phone: string
  password: string
  offers: boolean
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  async function signIn({ emailorphone, password }: SignInData) {
    const { data } = await api.post<ResponseProps>('api/auth/login', {
      emailorphone,
      password
    })

    setCookie(undefined, 'token', data.token, {
      maxAge: 30 * 24 * 60 * 60
    })

    api.defaults.headers = {
      Authorization: `Bearer ${data.token}`
    } as CommonHeaderProps

    Router.push('/')
  }

  async function signOut() {
    destroyCookie(undefined, 'token')

    api.defaults.headers = {
      Authorization: ``
    } as CommonHeaderProps

    Router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
