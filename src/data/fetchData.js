export const toLogin = (name, psw) => fetch('/api/signin', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  body: JSON.stringify({name: name, password: psw})
}).then(response => response.json())

export const getPosts = () => fetch('/api/posts').then(response => response.json())

export const toLogout = () => fetch('/api/signout').then(response => response.json())
