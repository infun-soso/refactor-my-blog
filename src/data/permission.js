import httpFetch from 'http-fetch'

httpFetch.onRequest = (request, next) => {
  console.log(request)
  next()
}
httpFetch.onError = err => console.log(err)

export default httpFetch
