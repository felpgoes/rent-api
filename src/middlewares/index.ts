import { Request, Response } from 'express'

const authentication = async (req: Request, res: Response) => {
  console.log('req: ', req.headers)
}

export { authentication }
