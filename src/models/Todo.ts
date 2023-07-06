import mongoose, { Schema, model } from 'mongoose'
import { IUser } from './User'

type statusTodo = 'pending' | 'to do' | 'doing' | 'completed'
type userCreateTodo = Pick<IUser, 'id' | 'username'>
interface ITodo {
  id: number
  title?: string
  description?: string
  status: statusTodo
  createdBy: userCreateTodo
}

const TodoSchema = new Schema<ITodo>({
  title: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'to do', 'doing', 'completed']
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

export default model<ITodo>('Todo', TodoSchema)
