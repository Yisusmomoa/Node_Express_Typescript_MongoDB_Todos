import bcrypt from 'bcrypt'

export const hashAuth = async (password: string, salt: string): Promise<any> => {
  return await bcrypt.hash(password, salt)
}
