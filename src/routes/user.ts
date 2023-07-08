import { Response, Router } from 'express'
import { createUser, loginUser } from '../types'
import { signin, signup } from '../services/user'
import authMe from '../middlewares/authMe'
import { CustomRequest } from '../CustomRequest'

const router = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/signup', async (req: CustomRequest, res: Response) => {
  try {
    const user: createUser = req.body
    const result = await signup(user)
    res.status(201).send(result)
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        status: 'fail',
        message: 'Email already exist'
      })
    }
    res.status(400).send({ message: error.message })
  }
})

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/signin', async (req: CustomRequest, res: Response) => {
  try {
    const user: loginUser = req.body
    const token = await signin(user)
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.cookie('token', token)
    res.status(201).send({ message: 'Usuario logeado', token })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

router.use(authMe)
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/me', async (req: CustomRequest, res: Response) => {
  try {
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.status(200).send({
      success: true,
      message: 'usuario encontrado',
      result: req.user
    })
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error
    })
  }
})

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/logout', async (_req: CustomRequest, res: Response) => {
  try {
    res.clearCookie('token', {
      secure: true,
      sameSite: 'none',
      maxAge: 1800000,
      httpOnly: true
    })
    res.status(200).send({ mesage: 'Logout exitoso' })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error
    })
  }
})

export default router

// TODO implementar JWT, me y logout
