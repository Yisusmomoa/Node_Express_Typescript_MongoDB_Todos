import { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../config/token'

function authMe (req: Request, res: Response, next: NextFunction): void {
  try {
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    const token = req.cookies.token
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!token) throw new Error('token invalido')
    const data = verifyToken(token)
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    req.user = data
    next()
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    })
  }
}

export default authMe
