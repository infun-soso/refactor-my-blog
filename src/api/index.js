import instance from './axios'

export const toLogin = (name, psw) => {
  return instance.post('/api/signin', {
    name: name,
    password: psw
  })
}
