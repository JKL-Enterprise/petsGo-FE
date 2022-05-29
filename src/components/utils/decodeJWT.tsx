import jwt_decode from 'jwt-decode'

const decodeJWT = (token: string) => {
  return jwt_decode(token)
}

export default decodeJWT
