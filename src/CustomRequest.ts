import { Request } from 'express'
import { showUser } from './types'

export interface CustomRequest extends Request {
  user?: showUser
}
