import { Router } from 'express'
import { createUser, loginUser } from '../types'
import { signin, signup } from '../services/user'

const router = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/signup', async (req, res) => {
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
router.post('/signin', async (req, res) => {
  try {
    const user: loginUser = req.body
    const result = await signin(user)
    res.status(201).send(result)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

// router.get('/me', async (req, res) => {

// })

// router.post('/logout', async (req, res) => {

// })

export default router
