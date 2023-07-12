import { NextFunction, Request, Response } from 'express'
import { body } from 'express-validator'
import validateResult from '../utils/validateHelper'

export const validateCreate = [
  body('username').exists().notEmpty().isString(),
  body('email').exists().notEmpty().isString().isEmail(),
  body('password').exists().notEmpty().isString().isLength({ min: 8, max: 15 }),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next)
  }
]

export const validateLogin = [
  body('email').exists().notEmpty().isEmail().isString(),
  body('password').exists().notEmpty().isString(),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next)
  }
]
