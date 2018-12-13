import apiUrl from '../../apiurl'

let baseUrl = ''
let env = process.env.NODE_ENV

switch (env) {
  case 'development':
    baseUrl = '/test/'
    break
  case 'production':
    baseUrl = apiUrl
    break
}

export {
  baseUrl
}
