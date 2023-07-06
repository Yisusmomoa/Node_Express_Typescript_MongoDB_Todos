import { Schema, model } from 'mongoose'

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
    requisred: true,
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

const ModelUser = model<IUser>('User', UserSchema)
export default ModelUser
