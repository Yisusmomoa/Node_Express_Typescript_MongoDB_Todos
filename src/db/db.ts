import mongoose from 'mongoose'
import ModelUser from '../models/User'
import ModelTodo from '../models/Todo'
const MONGOURL = 'mongodb+srv://root:5NBtA6ltJFnmyXw8@todos.b2pa7in.mongodb.net/?retryWrites=true&w=majority'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const connectDB = async () => {
  try {
    await mongoose.connect(MONGOURL)
    await ModelUser.createCollection()
    await ModelTodo.createCollection()
    console.log('Database connected...')
  } catch (error) {
    console.log(error.message)
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    void setTimeout(connectDB, 5000)
  }
}

export default connectDB

// mongodb+srv://root:5NBtA6ltJFnmyXw8@todos.b2pa7in.mongodb.net/?retryWrites=true&w=majority
