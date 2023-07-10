// import Todo from '../models/Todo'
import ModelTodo from '../models/Todo'
import { createTodo } from '../types'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const newTodo = async (todo: createTodo) => {
  const result = await ModelTodo.create(todo)
  console.log('🚀 ~ file: todo.ts:9 ~ newTodo ~ result:', result)
  return result
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const showTodosByUser = async (id: string) => {
  const todos = await ModelTodo.find({
    createdBy: id
  })
  return todos
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const showTodoById = async (id: string, idUser: string) => {
  const todo = await ModelTodo.findOne({
    createdBy: idUser,
    _id: id
  })
  if (todo == null) throw new Error('Todo does not found')
  return todo
}
