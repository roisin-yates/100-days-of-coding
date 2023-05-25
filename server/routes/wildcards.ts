import { Router, Request, Response } from 'express'

import * as db from '../db/db'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const wildcards = await db.getAllWildcards()
    res.json({ wildcards })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const wildcard = await db.getWildcardById(id)
    res.json({ wildcard })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
