import { ITodo } from './models/Todo'
import { IUser } from './models/User'

export type createUser = Pick<IUser, 'username' | 'email' | 'password'>
export type showUser = Pick<IUser, 'username' | 'email' | 'id'>
export type loginUser = Pick<IUser, 'email' | 'password'>

export type createTodo = Pick<ITodo, 'title' | 'description' | 'status' | 'createdBy'>
export type showTodo = Pick<ITodo, 'title' | 'description' | 'status' | 'createdBy'>
export type updatedTodo = Pick<ITodo, 'title' | 'description'>
