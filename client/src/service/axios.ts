import axios, { HeadersDefaults } from 'axios'
import { parseCookies } from 'nookies'

export type CommonHeaderProps = {
  Authorization?: string
} & HeadersDefaults

export function getAPIClient(ctx?: any) {
  const { token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:3080'
  })

  if (token) {
    api.defaults.headers = {
      Authorization: `Bearer ${token}`
    } as CommonHeaderProps
  }

  return api
}
