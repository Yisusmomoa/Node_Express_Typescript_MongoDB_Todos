import ModelUser from '../models/User'
import { createUser } from '../types'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const signup = async (user: createUser) => {
  const newUser = await ModelUser.create(user)
  console.log('🚀 ~ file: user.ts:7 ~ signup ~ newUser:', newUser)
  return newUser
}
