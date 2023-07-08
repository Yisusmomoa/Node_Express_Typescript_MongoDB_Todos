import bcrypt from 'bcrypt'
import { hashAuth } from './hashAuth'

export const encryptPassword = async (uPassword: string): Promise<[string, string]> => {
  const salt = await bcrypt.genSalt()
  uPassword = await hashAuth(uPassword, salt)
  return [salt, uPassword]
}
