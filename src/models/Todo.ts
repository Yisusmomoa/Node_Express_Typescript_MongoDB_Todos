import { Schema, model } from 'mongoose'

type statusTodo = 'pending' | 'to do' | 'doing' | 'completed'
export interface ITodo {
  title?: string
  description?: string
  status: statusTodo
  createdBy: Schema.Types.ObjectId
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
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const ModelTodo = model<ITodo>('Todo', TodoSchema)
export default ModelTodo
