import { Router, Request, Response } from 'express'

import * as db from '../db/db'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const subjects = await db.getAllSubjects()
    res.json({ subjects })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const subject = await db.getSubjectById(id)
    res.json({ subject })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
