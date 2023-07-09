import { Router, Response } from 'express'
import authMe from '../middlewares/authMe'
import { CustomRequest } from '../CustomRequest'
// import { createTodo } from '../types'
// import { newTodo } from '../services/todo'

const router = Router()

router.use(authMe)
router.get('/', (req: CustomRequest, res: Response) => {

})
router.get('/:id', (req: CustomRequest, res: Response) => {

})
router.delete('/:id', (req: CustomRequest, res: Response) => {

})

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/', async (req: CustomRequest, res: Response) => {
  // try {
  //   const todo: createTodo = {
  //     title: req.body.title,
  //     description: req.body.description,
  //     createdBy: req.user.id,
  //     status: req.body.status
  //   }
  //   const result = await newTodo(todo)
  //   // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  //   if (!result) throw new Error('Error al crear la todo, intentar más tarde')
  //   res.status(201).send(result)
  // } catch (error) {
  //   res.status(400).send({ message: error.message })
  // }
})
