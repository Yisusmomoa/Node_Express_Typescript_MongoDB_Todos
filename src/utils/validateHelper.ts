import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const validateResult = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (error) {
    res.status(404).send({ errors: error.array() })
  }
}

export default validateResult
