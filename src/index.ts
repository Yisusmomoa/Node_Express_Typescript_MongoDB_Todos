import express from 'express'
import connectDB from './db/db'

const app = express()

app.use(express.json())

const PORT = 3000

app.listen(PORT, () => {
  console.log('listen port', PORT)
  void connectDB()
})
