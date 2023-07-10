import { Router, Response, Request } from 'express'
import authMe from '../middlewares/authMe'
import { createTodo } from '../types'
import { newTodo } from '../services/todo'
import ModelUser from '../models/User'

const router = Router()

router.use(authMe)
// router.get('/', (req: Request, res: Response) => {

// })
// router.get('/:id', (req: Request, res: Response) => {

// })
// router.delete('/:id', (req: Request, res: Response) => {

// })

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/', async (req: Request, res: Response) => {
  try {
    const user = await ModelUser.findById(req.user.id)
    const todo: createTodo = {
      title: req.body.title,
      description: req.body.description,
      createdBy: user?.id,
      status: req.body.status
    }
    const result = await newTodo(todo)
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    // if (!result) throw new Error('Error al crear la todo, intentar más tarde')
    res.status(201).send(result)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

export default router
