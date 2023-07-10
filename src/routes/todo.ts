import { Router, Response, Request } from 'express'
import authMe from '../middlewares/authMe'
import { createTodo } from '../types'
import { newTodo, showTodosByUser } from '../services/todo'
import ModelUser from '../models/User'

const router = Router()

router.use(authMe)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/', async (req: Request, res: Response) => {
  try {
    const user = await ModelUser.findById(req.user.id)
    if (user == null) throw new Error('Error, user not found')
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

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/', async (req: Request, res: Response) => {
  try {
    const id = req.user.id
    const result = await showTodosByUser(id)
    res.status(201).send(result)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})
// router.get('/:id', (req: Request, res: Response) => {

// })
// router.delete('/:id', (req: Request, res: Response) => {

// })

export default router
