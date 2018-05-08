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

export const getMyPosts = (p) => {
  return instance.get('/api/posts', {
    params: {author: p}
  })
}

export const logout = () => {
  return instance.get('/api/signout')
}

export const create = (title, content) => {
  return instance.post('/api/create', {
    title: title,
    content: content
  })
}
