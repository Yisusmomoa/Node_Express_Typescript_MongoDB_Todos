import { Router } from 'express'

const router = Router()

router.post('/signup', async (req, res) => {
  try {

  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

// router.post('/signin', async (req, res) => {

// })

// router.get('/me', async (req, res) => {

// })

// router.post('/logout', async (req, res) => {

// })

export default router
