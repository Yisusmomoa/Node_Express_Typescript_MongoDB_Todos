import { IUser } from './models/User'

export type createUser = Pick<IUser, 'username' | 'email' | 'password'>
export type showUser = Pick<IUser, 'id' | 'username' | 'email'>
export type loginUser = Pick<IUser, 'email' | 'password'>
