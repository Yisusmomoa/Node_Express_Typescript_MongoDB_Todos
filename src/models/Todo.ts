import { Schema, model } from 'mongoose'

type statusTodo = 'pending' | 'to do' | 'doing' | 'completed'
export interface ITodo {
  title?: string
  description?: string
  status: statusTodo
  createdBy: string
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
    type: String,
    ref: 'User',
    required: true
  }
})

const ModelTodo = model<ITodo>('Todo', TodoSchema)
export default ModelTodo
