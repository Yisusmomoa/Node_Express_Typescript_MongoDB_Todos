import { Router, Response, Request } from 'express'
import authMe from '../middlewares/authMe'
import { createTodo, updatedTodo } from '../types'
import { changeStatus, deleteTodo, newTodo, showTodoById, showTodosByUser, todoUpdate } from '../services/todo'
import ModelUser from '../models/User'
import { statusTodo } from '../models/Todo'

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

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const idUser = req.user.id
    const result = await showTodoById(id, idUser)
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const idUser = req.user.id
    const result = await deleteTodo(id, idUser)
    res.status(200).send({ result, message: 'Your todo was deleted successfully' })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const idUser = req.user.id
    const status: statusTodo = req.body.status
    const result = await changeStatus(id, idUser, status)
    res.status(200).send({ result, message: 'qwe' })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const idUser = req.user.id
    const todoToUpdate: updatedTodo = req.body
    const result = await todoUpdate(id, idUser, todoToUpdate)
    res.status(200).send({ result, message: 'qwe' })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})
export default router
