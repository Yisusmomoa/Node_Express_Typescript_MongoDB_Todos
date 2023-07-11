import { generateToken } from '../config/token'
import ModelUser from '../models/User'
import { createUser, loginUser, showUser, updatedUser } from '../types'
import { encryptPassword } from '../utils/encryptPassword'
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
  const payload: showUser = {
    id: result.id,
    username: result.username,
    email: result.email
  }
  const token = generateToken(payload)
  return token
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const userUpdate = async (user: updatedUser) => {
  if (user.password != null) {
    const [newSalt, newPassword] = await encryptPassword(user.password)
    user.password = newPassword
    user.salt = newSalt
  }
  const result = await ModelUser.updateOne({
    _id: user.id
  }, {
    email: user.email,
    username: user.username,
    password: user.password,
    salt: user.salt
  }
  )
  return result
}
