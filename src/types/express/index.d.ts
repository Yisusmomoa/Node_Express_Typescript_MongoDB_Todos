import { showUser } from '../../types'
declare global{
  namespace Express {
    interface Request {
      user: showUser
    }
  }
}
