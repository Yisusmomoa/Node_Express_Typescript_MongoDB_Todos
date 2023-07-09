// import Todo from '../models/Todo'
import { createTodo } from '../types'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const newTodo = async (todo: createTodo) => {
  console.log(todo)
}
