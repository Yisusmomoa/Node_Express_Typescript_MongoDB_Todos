// import Todo from '../models/Todo'
import ModelTodo, { statusTodo } from '../models/Todo'
import { createTodo, updatedTodo } from '../types'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const newTodo = async (todo: createTodo) => {
  const result = await ModelTodo.create(todo)
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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const deleteTodo = async (id: string, idUser: string) => {
  const result = await ModelTodo.deleteOne({
    createdBy: idUser,
    _id: id
  })
  if (result.deletedCount <= 0) {
    throw new Error('Error, at the moment delete the todo try again later')
  }
  return result
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const changeStatus = async (id: string, idUser: string, status: statusTodo) => {
  const result = await ModelTodo.updateOne({
    createdBy: idUser,
    _id: id
  }, {
    status
  })
  if (!result.acknowledged) throw new Error('Error at updated todo')
  return result
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const todoUpdate = async (id: string, idUser: string, todo: updatedTodo) => {
  const result = await ModelTodo.updateOne({
    createdBy: idUser,
    _id: id
  }, {
    title: todo.title,
    description: todo.description

  })
  if (!result.acknowledged) throw new Error('Error at updated todo')
  return result
}
// https://github.com/midudev/express-typescript/blob/main/src/utils.ts
