import { Schema, model } from 'mongoose'

// export type statusTodo = 'pending' | 'to do' | 'doing' | 'completed'
export enum statusTodo {
  Pending = 'pending',
  ToDo = 'to do',
  Doing = 'doing',
  Completed = 'completed',
}
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
    enum: Object.values(statusTodo)
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const ModelTodo = model<ITodo>('Todo', TodoSchema)
export default ModelTodo
