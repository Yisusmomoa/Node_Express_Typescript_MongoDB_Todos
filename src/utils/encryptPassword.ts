import bcrypt from 'bcrypt'
import { hashAuth } from './hashAuth'
// import { createUser } from '../types'

export const encryptPassword = async (uPassword: string): Promise<[string, string]> => {
  const salt = await bcrypt.genSalt()
  uPassword = await hashAuth(uPassword, salt)
  return [salt, uPassword]
}

// Por favor necesito implementar una función externa para encriptar la contraseña de un usuario que se esta registrando en el hook prev('save') de mongoose
