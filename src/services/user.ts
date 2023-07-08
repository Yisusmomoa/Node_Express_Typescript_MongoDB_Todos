import ModelUser from '../models/User'
import { createUser, loginUser } from '../types'
import { validatePassword } from '../utils/validatePassword'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const signup = async (user: createUser) => {
  const newUser = await ModelUser.create(user)
  return newUser
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const signin = async (user: loginUser) => {
  const query = ModelUser.where({ email: user.email })
  const result = await query.findOne()
  if (result === null) throw new Error("User doesn't exist")
  const isEqual = await validatePassword(user.password, result.salt, result.password)
  if (!isEqual) throw new Error('Error, incorrect password')
  return result
}
