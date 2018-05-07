import instance from './axios'

export const login = (name, psw) => {
  return instance.post('/api/signin', {
    name: name,
    password: psw
  })
}

export const getPosts = () => {
  return instance.get('/api/posts')
}

export const logout = () => {
  return instance.get('/api/signout')
}
