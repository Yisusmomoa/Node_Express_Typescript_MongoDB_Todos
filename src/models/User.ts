import { Schema, model } from 'mongoose'
import { encryptPassword } from '../utils/encryptPassword'
import { ITodo } from './Todo'

export interface IUser {
  id: string
  username: string
  email: string
  password: string
  salt: string
  todos: ITodo[]
}

export const UserSchema = new Schema<IUser>({
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
  salt: { type: String },
  todos: [{
    type: Schema.Types.ObjectId,
    ref: 'todos'
  }]
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
