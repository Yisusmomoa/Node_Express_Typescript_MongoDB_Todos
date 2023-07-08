import { Schema, model } from 'mongoose'
import { encryptPassword } from '../utils/encryptPassword'

export interface IUser {
  id: number
  username: string
  email: string
  password: string
  salt: string
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 15
  },
  salt: { type: String }
}, { timestamps: true })

UserSchema.pre('save', async function (next) {
  try {
    const [salt, password] = await encryptPassword(this.password)
    this.salt = salt
    this.password = password
  } catch (error) {
    next(error)
  }
})

const ModelUser = model<IUser>('User', UserSchema)
export default ModelUser
