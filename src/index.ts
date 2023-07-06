import express from 'express'
import connectDB from './db/db'
import routes from './routes'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/api', routes)

const PORT = 3000

app.listen(PORT, () => {
  console.log('listen port', PORT)
  void connectDB()
})
