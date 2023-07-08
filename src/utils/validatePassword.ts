import { hashAuth } from './hashAuth'

export const validatePassword = async (password: string, salt: string, passwordEncrypt: string): Promise<boolean> => {
  const passwordHash = await hashAuth(password, salt)
  return passwordHash === passwordEncrypt
}
