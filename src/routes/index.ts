import { Router } from 'express'
import userRoutes from './user'
import todoRoutes from './todo'
const routes = Router()

routes.use('/user', userRoutes)
routes.use('/todo', todoRoutes)

export default routes
